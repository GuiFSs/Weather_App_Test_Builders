import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

export function formatDate(date: Date, formatStr: string) {
  return format(date, formatStr, {
    locale: pt,
  });
}
