import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should create a remove expense action object', () => {
    const result = removeExpense({ id: 'ik34djlg9ck' });
    expect(result).toEqual({
      type: "REMOVE_EXPENSE",
      id: "ik34djlg9ck",
    });
});

test('should create an edit expense action object', () => {
    const result = editExpense('kelon83n4m', { note: 'note updates' });
    expect(result).toEqual({
      type: "EDIT_EXPENSE",
      id: "kelon83n4m",
      updates: {
          note: 'note updates'
      }
    });
});

test('should create an add expense object with provided values', () => {
    const newExpense = {
      description: "Rent",
      amount: 109500,
      createdAt: 1000,
      note: 'january rent'
    };

    const result = addExpense(newExpense);

    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...newExpense,
            id: expect.any(String)
        }
    })

});

test('shold create an add expense object with default values', () => {
    const result = addExpense();
    
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: "",
            note: "",
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
});
