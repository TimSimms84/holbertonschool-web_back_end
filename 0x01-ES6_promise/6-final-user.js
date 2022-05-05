import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return [Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((response) => ({ status: 'fulfilled', value: response })).catch((response) => ({ status: 'rejected', value: response.toString() })),
  ];
}
