const stepInput = document.querySelector('input#sign-up-step')
const csrfToken = document.querySelector('input[name="_csrf"]').value

const handleDisplayStep = () => {
    const step = stepInput.value

    document.querySelectorAll('.sign-up-step-container').forEach(div => {
        if (div.getAttribute('data-step') === step) {
            div.style.display = 'block'
        } else {
            div.style.display = 'none'
        }
    })
}

document.querySelectorAll('button.next-step-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
        const currentStep = Number(stepInput.value)

        switch (currentStep) {
            case 1: {
                const email = document.querySelector('input#email').value
                const request = await fetch('/check-exists-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': csrfToken
                    },
                    body: JSON.stringify({
                        email
                    })
                })
                const response = await request.json()
                console.log(response)
                break
            }
            case 2: {
                break
            }
            default:
                throw new Error('invalid sign up step')
        }

        stepInput.setAttribute('value', (currentStep + 1))
        handleDisplayStep()        
    })
})

handleDisplayStep()