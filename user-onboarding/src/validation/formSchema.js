import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('hey u need a name lol')
        .min(2, 'sorry if your name is actually one letter but it needs to be at least 2 letters here :('),
    email: yup
        .string()
        .email('ur email address doesnt make sense...........')
        .required('we need ur email :)'),
    password: yup
        .string()
        .required('type in a cool password!')
        .min(7, 'password has to be at least 7 characters long dude'),
    agreeToTerms: yup.boolean().isTrue('agree to the terms or else >:(')
})

export default formSchema;