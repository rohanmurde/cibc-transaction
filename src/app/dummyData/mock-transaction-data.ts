import { Transaction } from "../interfaces/Transaction";

export const storedTransactions: Transaction[] = [
    {
        id: 1,
        date: '21/07/2020',
        comments: 'Utility Bill',
        view: true
    }, {
        id: 2,
        date: '15/04/2021',
        comments: 'Solar Bill',
        view: true
    }, {
        id: 3,
        date: '30/06/2022',
        comments: 'Other Bills',
        view: false
    }
]