import AppFrameName from '@electron/types/AppFrameName'

const myFunction = (name: AppFrameName) => {
    return name.toLowerCase()
}

myFunction('aaaa')
