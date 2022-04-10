const socket = io('http://localhost:3000')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('user-message')
socket.on('chat-message',data=>{
    console.log(data)
})
messageForm.addEventListener('submit',e => {
    e.preventDefault()
    const message = 
})