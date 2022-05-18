
export const getAge = (dateBirth: string): number => {
    let today = new Date();
    let birth = new Date(dateBirth);
    let age = today.getFullYear() - birth.getFullYear();
    let month = today.getMonth() - birth.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}

