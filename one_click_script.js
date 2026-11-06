(() => {
    // 1. Hàm tự động tìm token từ Webpack của Discord
    function getDiscordToken() {
        let token = null;
        try {
            window.webpackChunkdiscord_app.push([[Symbol()], {}, o => {
                for (let e of Object.values(o.c)) {
                    try {
                        if (!e.exports || e.exports === window) continue;
                        if (typeof e.exports.getToken === 'function') {
                            token = e.exports.getToken();
                            if (token) return;
                        }
                        for (let prop in e.exports) {
                            if (e.exports[prop] && typeof e.exports[prop].getToken === 'function' && e.exports[prop][Symbol.toStringTag] !== 'IntlMessagesProxy') {
                                token = e.exports[prop].getToken();
                                if (token) return;
                            }
                        }
                    } catch (err) {}
                }
            }]);
            window.webpackChunkdiscord_app.pop();
        } catch (e) {}
        return token;
    }

    // 2. Xóa popup cũ nếu đã tồn tại
    const oldModal = document.getElementById('hypesquad-popup-modal');
    if (oldModal) oldModal.remove();

    // 3. Tạo giao diện popup trực quan ngay giữa màn hình Discord
    const modal = document.createElement('div');
    modal.id = 'hypesquad-popup-modal';
    modal.style = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #2b2d31;
        border: 2px solid #5865F2;
        border-radius: 12px;
        padding: 24px;
        z-index: 999999;
        box-shadow: 0 12px 36px rgba(0,0,0,0.7);
        font-family: 'gg sans', 'Noto Sans', sans-serif;
        color: white;
        width: 320px;
        text-align: center;
    `;

    modal.innerHTML = `
        <h3 style="margin: 0 0 8px 0; font-size: 18px; color: #5865F2;">CHỌN HUY HIỆU HYPESQUAD</h3>
        <p style="font-size: 13px; color: #b5bac1; margin-bottom: 16px;">Bấm chọn 1 trong 3 nhà bạn thích:</p>
        
        <button id="btn-bravery" style="width: 100%; margin: 6px 0; padding: 10px; background: #9b59b6; color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; transition: 0.2s;">💜 House of Bravery</button>
        <button id="btn-brilliance" style="width: 100%; margin: 6px 0; padding: 10px; background: #e67e22; color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; transition: 0.2s;">🧡 House of Brilliance</button>
        <button id="btn-balance" style="width: 100%; margin: 6px 0; padding: 10px; background: #1abc9c; color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; transition: 0.2s;">🩵 House of Balance</button>
        <button id="btn-remove" style="width: 100%; margin: 6px 0; padding: 8px; background: #4e5058; color: #ff7373; border: none; border-radius: 6px; cursor: pointer; font-size: 12px;">❌ Gỡ huy hiệu</button>
        
        <div id="status-msg" style="margin-top: 12px; font-size: 13px; font-weight: bold; min-height: 18px;"></div>
        <button id="btn-close" style="margin-top: 10px; background: transparent; border: none; color: #949ba4; cursor: pointer; text-decoration: underline; font-size: 12px;">Đóng bảng này</button>
    `;

    document.body.appendChild(modal);

    const statusEl = document.getElementById('status-msg');

    async function applyBadge(houseId) {
        statusEl.style.color = '#e2e4e9';
        statusEl.innerText = '⏳ Đang xử lý...';

        const token = getDiscordToken();
        if (!token) {
            statusEl.style.color = '#f23f43';
            statusEl.innerText = '❌ Không tìm thấy Token! Vui lòng tải lại trang rồi thử lại.';
            return;
        }

        try {
            let res;
            if (houseId === 0) {
                // Gỡ huy hiệu
                res = await fetch('https://discord.com/api/v9/hypesquad/online', {
                    method: 'DELETE',
                    headers: { 'Authorization': token }
                });
            } else {
                // Nhận huy hiệu
                res = await fetch('https://discord.com/api/v9/hypesquad/online', {
                    method: 'POST',
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ house_id: houseId })
                });
            }

            if (res.status === 204) {
                statusEl.style.color = '#23a55a';
                statusEl.innerText = '🎉 Thành công! Nhấn F5 để thấy huy hiệu.';
            } else {
                statusEl.style.color = '#f23f43';
                statusEl.innerText = `❌ Thất bại (Mã: ${res.status})`;
            }
        } catch (err) {
            statusEl.style.color = '#f23f43';
            statusEl.innerText = '❌ Lỗi kết nối mạng!';
        }
    }

    document.getElementById('btn-bravery').onclick = () => applyBadge(1);
    document.getElementById('btn-brilliance').onclick = () => applyBadge(2);
    document.getElementById('btn-balance').onclick = () => applyBadge(3);
    document.getElementById('btn-remove').onclick = () => applyBadge(0);
    document.getElementById('btn-close').onclick = () => modal.remove();
})();
