<script src="https://cdn.withpersona.com/dist/persona-v4.0.0.js"></script>
2	<script>
3	  const client = new Persona.Client({
4	    templateId: itmpl_3X7Z8Ma8Yauq8re3kgkzVi4c,
5	    environment: 'sandbox',
6	    onReady: () => client.open(),
7	    onComplete: ({ inquiryId, status, fields }) => {
8	      console.log(`Completed inquiry ${inquiryId} with status ${status}`);
9	    }
10	  });
11	</script>


<script src="https://cdn.withpersona.com/dist/persona-vX.Y.Z.js"></script>

<script>
  const client = new Persona.Client({
    templateId: "itmpl_Ygs16MKTkA6obnF8C3Rb17dm",
    environment: "sandbox",
    onReady: () => client.open(),
    onComplete: ({ inquiryId, status, fields }) => {
      console.log(`Sending finished inquiry ${inquiryId} to backend`);
    },
    onCancel: ({ inquiryId, sessionToken }) => console.log('onCancel'),
    onError: (error) => console.log(error),
  });
</script>
