export let Users = [
    {
        id:1,
        FIO: 'Stas Kirillov Olegovich',
        attempts: [{
            attemptId: 1,
            testId: 1,
            title:'math',
            answers: ['two', '1', 'APM'],
            result: [true, true, false],
            date: '20-01-2021 21:00',
            timeSpent: '20 min'
        },
        {
            attemptId: 2,
            testId: 1,
            title:'math',
            answers: ['two', '1', 'dzen'],
            result: [true, true, true],
            date: '21-01-2021 15:00',
            timeSpent: '20 min'
        },
        {
            attemptId: 3,
            testId: 1,
            title:'math',
            answers: ['one', '2', 'APM'],
            result: [false, false, false],
            date: '21-01-2021 21:00',
            timeSpent: '20 min'
        },
        {
            attemptId: 4,
            testId: 2,
            title:'Sam Serious tset',
            answers: ['two', '1', 'dzen'],
            result: [true, true, true],
            date: '21-01-2021 15:00',
            timeSpent: '20 min'
        },]
    },
    {
        id:2,
        FIO: 'Kirill Ivanov Sergeevich',
        attempts: []
    },    
    {
        id:3,
        FIO: 'Slava Penechkov Ivanovich',
        attempts: []
    },
]