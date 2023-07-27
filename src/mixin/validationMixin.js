export const validationMixin = {
    data() {
    return {
        inputValue: '',
        errorMessage: '',
    };
    },
    methods: {
    validateInput() {
        // Ваша логіка валідації тут
        // Приклад: перевірка на пусту строку
        if (this.inputValue.trim() === '') {
        this.errorMessage = 'Це поле є обов\'язковим';
        } else {
        this.errorMessage = '';
        }
    },
    },
};