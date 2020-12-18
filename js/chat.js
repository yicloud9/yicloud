;(function (win) {
    var chatMessages = [
        [
            { name: 'ms1', delay: 1000, align: 'right', showTime: true, msg: 'Who are you?' },
            {
                name: 'ms15',
                delay: 1000,
                align: 'left',
                showTime: true,
                msg: 'Thanks! Something you want to add? Thanks! Something you want to add Thanks! Something you want to add',
            },
            {
                name: 'ms15',
                delay: 1000,
                align: 'left',
                showTime: true,
                msg: 'Thanks! Something you want to add?',
            },
        ],
    ]
    var chatDelay = 0
    function onRowAdded() {
        $('.chat-container').animate({
            scrollTop: $('.chat-container').prop('scrollHeight'),
        })
    }

    function start(index) {
        const messageList = chatMessages[index]
        $.each(messageList, function (index, obj) {
            chatDelay = chatDelay + 1000
            chatDelay2 = chatDelay + obj.delay
            chatDelay3 = chatDelay2 + 10

            scrollDelay = chatDelay
            chatTimeString = ' '
            msgname = '.' + obj.name
            msginner = '.messageinner-' + obj.name
            spinner = '.sp-' + obj.name
            let lAvatar = obj.align === 'left' ? '<span class="avatar l-avatar" ></span>' : ''
            let rAvatar = obj.align === 'right' ? '<span class="avatar r-avatar"></span>' : ''
            $('.chat-message-list').append(
                "<li class='message-item message-" + obj.align + ' ' + obj.name + "' hidden><div class='wrap'><div class='sp-wrapper sp-" +
                    obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" +
                    obj.name + " msg-content' hidden>" + lAvatar+ "<span class='message-text'>" + obj.msg + '</span>' + rAvatar +
                    '</div></div></li>'
            )
            $(msgname).delay(chatDelay).fadeIn()
            $(spinner).delay(chatDelay2).hide(1)
            $(msginner).delay(chatDelay3).fadeIn()
            setTimeout(onRowAdded, chatDelay3)
            chatDelay = chatDelay3
        })
    }
    start(0)
    win.startMessage = start
})(window)
