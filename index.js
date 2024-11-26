const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const main = () => {
    rl.question("Enter your date of birth (YYYY-MM-DD): ", (dob_input) => {
        let check_date = new Date(dob_input);
        if (check_date == 'Invalid Date') {
            console.log('date is invalid');
            return main();
        } else {
            rl.question("Enter your gender: ", (gender_input) => {
                const startDate = new Date('2021-06-01');
                const endDate = new Date('2021-08-31');

                const nowAge = endDate.getFullYear() - check_date.getFullYear();
                const DateOfBirthNowMonth = endDate.getMonth() - check_date.getMonth();


                const what_a_day = (day) => {
                    return day === 0 ? 'อาทิตย์' : day === 1 ? 'จันทร์' : day === 2 ? 'อังคาร' : day === 3 ? 'พุธ' : day === 4 ? 'พฤหัสบดี' : day === 5 ? 'ศุกร์' : 'เสาร์';
                }

                const what_a_month = (month) => {
                    return month === 1 ? 'มกราคม' : month === 2 ? 'กุมภาพันธ์' : month === 3 ? 'มีนาคม' : month === 4 ? 'เมษายน' : month === 5 ? 'พฤษภาคม' : month === 6 ? 'มิถุนายน' : month === 7 ? 'กรกฎาคม' : month === 8 ? 'สิงหาคม' : month === 9 ? 'กันยายน' : month === 10 ? 'ตุลาคม' : month === 11 ? 'พฤศจิกายน' : 'ธันวาคม';
                }

                let Eligible_Flag = 'N';
                let Service_Start_Date = null;
                let Service_End_Date = null;

                if (nowAge >= 65) {
                    Eligible_Flag = 'Y';
                    Service_Start_Date = startDate;
                    Service_End_Date = endDate;
                } else if (nowAge < 65 && nowAge > 2) {
                    var newDate = new Date(check_date);
                    newDate.setFullYear(newDate.getFullYear() + 65);
                    Service_Start_Date = newDate
                } else if (nowAge <= 2 && nowAge > 0) {
                    if (nowAge == 2) {
                        if (DateOfBirthNowMonth >= 0) {
                            let new_end_date = new Date(check_date);
                            new_end_date.setFullYear(new_end_date.getFullYear() + 2);
                            Eligible_Flag = 'Y';
                            Service_Start_Date = startDate;
                            Service_End_Date = new_end_date;
                        }
                    } else {
                        Eligible_Flag = 'Y';
                        Service_Start_Date = startDate;
                        Service_End_Date = endDate;
                    }

                } else if (nowAge == 0) {
                    if (DateOfBirthNowMonth >= 6) {
                        let new_Start_Date = new Date(check_date);
                        new_Start_Date.setMonth(new_Start_Date.getMonth() + 6);
                        Eligible_Flag = 'Y';
                        Service_Start_Date = new_Start_Date;
                        Service_End_Date = endDate;
                    }
                }

                if (Service_Start_Date != null) {
                    Service_Start_Date = new Date(Service_Start_Date);
                }
                if (Service_End_Date != null) {
                    Service_End_Date = new Date(Service_End_Date);
                }

                // console.log(Eligible_Flag, 'Eligible_Flag');
                // console.log(Service_Start_Date, 'Service_Start_Date');
                // console.log(Service_End_Date, 'Service_End_Date');

                console.log('-------------------');
                console.log(gender_input, 'เกิดวัน', what_a_day(check_date.getDay()), 'ที่', check_date.getDate(), 'เดือน', what_a_month(check_date.getMonth() + 1), 'ปี', check_date.getFullYear() + 543);
                if (Service_Start_Date != null) {
                    console.log('เริ่มให้บริการวันที่', Service_Start_Date.getDate(), 'เดือน', what_a_month(Service_Start_Date.getMonth() + 1), 'ปี', Service_Start_Date.getFullYear() + 543);
                }
                if (Service_End_Date != null) {
                    console.log('สิ้นสุดให้บริการวันที่', Service_End_Date.getDate(), 'เดือน', what_a_month(Service_End_Date.getMonth() + 1), 'ปี', Service_End_Date.getFullYear() + 543);
                }
                rl.close();
            });
        }
    });
}
main();