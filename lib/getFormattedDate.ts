export default function getFormattedDate(dateString: string): string {
   return (
      new Intl.DateTimeFormat('pt-Br', { dateStyle: 'long' })
      .format(new Date(dateString))
   );
}