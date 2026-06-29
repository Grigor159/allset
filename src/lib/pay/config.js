export const paymentConfig = {
  idram: {
    endpoint: "payments/idram/initiate",
    onSuccess: (result) => {
      const {
        actionUrl,
        edpLanguage,
        edpRecAccount,
        edpDescription,
        edpAmount,
        edpBillNo,
      } = result;

      const form = document.createElement("form");
      form.method = "POST";
      form.action = actionUrl;

      const fields = {
        EDP_LANGUAGE: edpLanguage,
        EDP_REC_ACCOUNT: edpRecAccount,
        EDP_DESCRIPTION: edpDescription,
        EDP_AMOUNT: edpAmount,
        EDP_BILL_NO: edpBillNo,
      };

      Object.entries(fields).forEach(([name, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = value;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    },
  },
  arca: {
    endpoint: "payments/arca/initiate",
    onSuccess: ({ formUrl }) => {
      if (formUrl) {
        window.location.href = formUrl;
      }
    },
  },
};
