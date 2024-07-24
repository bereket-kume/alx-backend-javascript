import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstname, lastname, filename) {
  return Promise
    .allSettled([signUpUser(firstname, lastname), uploadPhoto(filename)])
    .then((res) => res.map((val) => ({
      status: val.status,
      value: val.status === 'fulfilled' ? val.value : String(val.reason),
    })));
}
