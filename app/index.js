import './styles/main.css';

import focusLimiter from './scripts/focusLimiter';

const form = document.querySelector('.form');
const formLimiter = focusLimiter(form);

formLimiter.limit();