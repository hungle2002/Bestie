
/* eslint-disable max-len */
// import client from '../../utils/chatService';
import EndDayBox from '../../components/endDayBox';
function ChattingPage () {
    // const prompt = 'Trong vai một người bạn tên là bestie, nhiệm vụ chính của bạn là tâm sự với người dùng như một người bạn tri kỉ về các vấn đề trong việc chữa lành cảm xúc của người dùng. Hãy đề cao vai trò và cảm xúc của người dùng khi trò chuyện. Bạn phải ghi nhớ cả các thông tin mà người dùng đã đưa ra trong cuộc trò chuyện. Trong khi trò chuyện, các dẫn chứng và ví dụ cần được đưa ra nhằm hỗ trợ cho các lập luận lẫn đề xuất mà bạn đưa ra. Lưu ý phải luôn giữ cuộc trò chuyện vui vẻ và thoải mái.\nNgười dùng: Hôm nay, tôi đã không hoàn thành được deadline tôi đặt ra, bạn có thể hỏi thăm và cho tôi một vài động lực được không?\nBestie:';
    // const reply = client.generateCompletion(prompt).then((rsp) => { console.log(rsp); });
    return (
        <div className='fixed w-screen h-screen z-[60] bg-zinc-300/50 flex justify-center items-center'>
            <EndDayBox/>
        </div>
    );
}

export default ChattingPage;
