const videoElement =document.getElementById('video');
const button = document.getElementById('button');


async function displayVideo(){
    try {
        const setData = await  navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject =setData;
        videoElement.onloadedmetadata =() => {
            videoElement.play();
        }
    } catch (error) {
        
    }
}

button.addEventListener('click', async ()=> {
    button.dsabled =true;
    await videoElement.requestPictureInPicture();
    button.disabled =false;
    
})

displayVideo();

