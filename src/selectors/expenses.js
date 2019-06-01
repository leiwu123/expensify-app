import moment from 'moment';

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        // const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        // const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        // console.log(expense.createdAt);
        const createdAtMoment = moment(expense.createdAt);
        // console.log(createdAtMoment);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
    // filter return true keep in the array
};