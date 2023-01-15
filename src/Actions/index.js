export const deposit = amount => {
    return {
        type: 'DEPOSIT',
        payload: amount,
    }
}

export const withDraw = amount => {
    return {
        type: 'WITHDRAW',
        payload: amount,
    }
}

export const collectInterest = amount => {
    return {
        type: 'COLLECT_INTEREST',
        payload: amount,
    }
}

export const deleteAccount = amount => {
    return {
        type: 'DELETE_ACCOUNT',
    }
}


export const toggleAccount = () => {
    return {
        type: 'TOGGLE',
    }
}