export const formatCPF = (value: string): string => {
    let numbers = value.replace(/\D/g, "").slice(0, 11);

    numbers = numbers.replace(/(\d{3})(\d)/, "$1.$2");
    numbers = numbers.replace(/(\d{3})(\d)/, "$1.$2");
    numbers = numbers.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    return numbers;
};


export const formatInstitution = (value: string): string => {
    return value.replace(/[^a-zA-Z\u00C0-\u00FF\s.-]/g, "");
};

export const validateCPF = (cpf: string): boolean => {
    const cleaned = cpf.replace(/\D/g, "");

    if (cleaned.length !== 11) return false;
    if (/^(\d)\1{10}$/.test(cleaned)) return false;

    let sum = 0;
    for (let i = 0; i < 9; i++) sum += Number(cleaned[i]) * (10 - i);
    let firstDigit = (sum * 10) % 11;
    if (firstDigit === 10) firstDigit = 0;

    if (firstDigit !== Number(cleaned[9])) return false;

    sum = 0;
    for (let i = 0; i < 10; i++) sum += Number(cleaned[i]) * (11 - i);
    let secondDigit = (sum * 10) % 11;
    if (secondDigit === 10) secondDigit = 0;

    return secondDigit === Number(cleaned[10]);
};

export const formatDocument = (value: string): string => {
    const cleaned = value.toUpperCase();

    // PASSAPORTE → letras + números
    if (/[A-Z]/.test(cleaned)) {
        return cleaned
            .replace(/[^A-Z0-9]/g, "")
            .slice(0, 12);
    }

    // CPF → somente números
    return formatCPF(cleaned);
};
