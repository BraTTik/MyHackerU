$(document).ready(function() {
    main()
})

function main() {
    $('input').on({
        blur: function() {
            $(this).css("border-color", "green")
            $(this).css("background-color", "#3b3b3b")
            this.value = validation(this)
        },
        focus: function() {
            $(this).css("background-color", "#ebebeb")
        }
    })
    $('button').on({
        mouseenter: function() {
            $(this).css("background-color", "#7aaaf5")
        },
        mouseleave: function() {
            $(this).css("background-color", "#4287f5")
        }
    })

    $('.word').on({
        blur: function() {
            console.log("blur")
            let value = this.value
            this.value = `${value[0].toUpperCase()}${value.slice(1).toLowerCase()}`
        }
    })

    $('.phone').blur(
        function() {
            if (!phoneNumberValidation(this.value)) {
                $('.warning').show()
                this.value = '';
            } else {
                $('.warning').hide()
            }
        }
    )
}

function phoneNumberValidation(value) {
    if (value.length < 11 || value.length > 11 || isNaN(value)) {
        return false
    }
    return true
}


function validation(obj) {
    let value = obj.value
    if (value === '') {
        $(obj).css("background-color", "red")
    }
    return value
}