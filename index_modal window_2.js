

const modal = $.modal( {
  title: 'Vladilen Modal',
  closable: true,
  content: `
    <p> lorem  ipsum dolor sit.</p>
    <p> lorem  ipsum dolor sit.</p>
    `,
   width: '400px',
   footerButtons: [
       {text: 'Ok', type: 'primary', heandler() {
           console.log('Primary btn clicked')
       }},
       {text: 'Cancel', type: 'danger', heandler() {
        console.log('Danger btn clicked')
    }}
   ]
})
