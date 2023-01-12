const inboxBtn = document.querySelector("button.inboxTop")
const sentBtn = document.querySelector("button.sentTop")
const draftsBtn = document.querySelector("button.draftsTop")
const spamBtn = document.querySelector("button.spamTop")
const trashBtn = document.querySelector("button.trashTop")
const topInboxMes = document.getElementById('topInboxDrop')
const topSentMes = document.getElementById('sentMessagesDrop')
const topDraftsMes = document.getElementById('draftsMessagesDrop')
const topSpamMes = document.getElementById('spamMessagesDrop')
const topTrashMes = document.getElementById('trashMessagesDrop')



inboxBtn.onclick = (()=>{
    topTrashMes.setAttribute("class","collapse");
    topSentMes.setAttribute("class", "collapse");
    topDraftsMes.setAttribute("class", "collapse");
    topSpamMes.setAttribute("class", "collapse");
    topInboxMes.removeAttribute("class","collapse");
});

sentBtn.onclick = (()=>{
    topTrashMes.setAttribute("class","collapse");
    topSpamMes.setAttribute("class","collapse");
    topInboxMes.setAttribute("class","collapse");
    topDraftsMes.setAttribute("class","collapse");
    topSentMes.removeAttribute("class", "collapse");
});

draftsBtn.onclick = (()=>{
    topTrashMes.setAttribute("class","collapse");
    topInboxMes.setAttribute("class","collapse");
    topSentMes.setAttribute("class", "collapse");
    topSpamMes.setAttribute("class", "collapse");
    topDraftsMes.removeAttribute("class","collapse");
});

spamBtn.onclick = (()=>{
    topTrashMes.setAttribute("class","collapse");
    topInboxMes.setAttribute("class","collapse");
    topSentMes.setAttribute("class", "collapse");
    topSpamMes.removeAttribute("class", "collapse");
    topDraftsMes.setAttribute("class","collapse");
});

trashBtn.onclick = (()=>{
    topTrashMes.removeAttribute("class","collapse");
    topInboxMes.setAttribute("class","collapse");
    topSentMes.setAttribute("class", "collapse");
    topSpamMes.setAttribute("class", "collapse");
    topDraftsMes.setAttribute("class","collapse");
});