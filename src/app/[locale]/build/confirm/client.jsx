// "use client";

// import { parseAsString, useQueryStates } from "nuqs";
// import { useGetAuthTanstack } from "@/hooks/useTanstack";
// import { Box, Stack } from "@chakra-ui/react";
// import { error } from "@/components/ui/alerts";
// import { Animate } from "@/components/ui/animate";
// import { TitleDemo } from "@/components/build/titleDemo";
// import { ConfirmDate } from "@/components/build/confirmDate";
// import { Promocode } from "@/components/build/promocode";
// import { Payment } from "@/components/build/payment";
// import { Pay } from "@/components/build/pay";
// import { Success } from "@/components/build/success";
// import { Failed } from "@/components/build/failed";

// export const ConfirmClient = () => {
//   const [{ status, payment, id, legal }, setQuery] = useQueryStates({
//     id: parseAsString,
//     status: parseAsString,
//     payment: parseAsString,
//     legal: parseAsString,
//   });

//   const { data } = useGetAuthTanstack(`invitations/${id}`, !!id);

//   const submit = async (e) => {
//     e.preventDefault();
//     try {
//       // const { data } = await apiClient.post(`/invitations`, form);
//       // if (data.status === "ok") {
//       //   success("Basic Wedding Information Completed.");
//       //   setForm();
//       //   router.push(`/payment`);
//       // }
//       setQuery({ status: payment === "visa" ? "failed" : "success" });
//     } catch (err) {
//       error(`Error - ${err}`);
//     }
//   };

//   return (
//     <Box pt={{ base: "32px", md: "48px" }} pb={{ base: "22px", md: "40px" }}>
//       <Stack
//         gap={{ base: "16px", md: "24px" }}
//         w={{ base: "100%", lg: "748px" }}
//         mx="auto"
//       >
//         <Stack
//           id="confirm"
//           as="form"
//           gap={{ base: "16px", md: "24px" }}
//           autoComplete="on"
//           onSubmit={submit}
//         >
//           <Animate>
//             <TitleDemo
//               language={data?.languages[0]}
//               urlExtension={data?.urlExtension}
//             />
//           </Animate>
//           <Animate>
//             <ConfirmDate value={data?.eventDate} />
//           </Animate>
//         </Stack>
//         <Animate>
//           <Promocode data={data?.pricing}/>
//         </Animate>
//         <Animate>
//           <Payment legal={legal} payment={payment} setQuery={setQuery} />
//         </Animate>
//         <Animate>
//           <Pay />
//         </Animate>
//       </Stack>

//       <Success
//         open={status === "success"}
//         setQuery={setQuery}
//         language={data?.languages[0]}
//         urlExtension={data?.urlExtension}
//         price={data?.finalPrice}
//       />
//       <Failed
//         open={status === "failed"}
//         setQuery={setQuery}
//         price={data?.finalPrice}
//       />
//     </Box>
//   );
// };

// "use client";

// import { parseAsString, useQueryStates } from "nuqs";
// import { useGetAuthTanstack } from "@/hooks/useTanstack";
// import { Box, Stack } from "@chakra-ui/react";
// import { error } from "@/components/ui/alerts";
// import { Animate } from "@/components/ui/animate";
// import { TitleDemo } from "@/components/build/titleDemo";
// import { ConfirmDate } from "@/components/build/confirmDate";
// import { Promocode } from "@/components/build/promocode";
// import { Payment } from "@/components/build/payment";
// import { Pay } from "@/components/build/pay";
// import { Success } from "@/components/build/success";
// import { Failed } from "@/components/build/failed";
// import { useRef } from "react";

// const IDRAM_ACCOUNT = "100000114"; // your EDP_REC_ACCOUNT

// export const ConfirmClient = () => {
//   const idramFormRef = useRef(null);

//   const [{ status, payment, id, legal }, setQuery] = useQueryStates({
//     id: parseAsString,
//     status: parseAsString,
//     payment: parseAsString,
//     legal: parseAsString,
//   });

//   const { data } = useGetAuthTanstack(`invitations/${id}`, !!id);

//   const submit = async (e) => {
//     e.preventDefault();
//     try {
//       if (payment === "idram") {
//         // Submit the hidden iDram form programmatically
//         idramFormRef.current?.submit();
//         return;
//       }

//       // Visa / other flow (keep your existing logic or replace)
//       setQuery({ status: "failed" });
//     } catch (err) {
//       error(`Error - ${err}`);
//     }
//   };

//   // iDram redirects back to these URLs — set them in your iDram merchant settings
//   // e.g. success: https://yourdomain.com/confirm?id=<id>&status=success
//   //      fail:    https://yourdomain.com/confirm?id=<id>&status=failed
//   const billNo = data?.id ?? id; // unique order ID
//   const amount = data?.finalPrice ?? "0"; // amount in AMD

//   return (
//     <Box pt={{ base: "32px", md: "48px" }} pb={{ base: "22px", md: "40px" }}>
//       {/* Hidden iDram form — submitted programmatically on pay */}
//       <form
//         ref={idramFormRef}
//         action="https://banking.idram.am/Payment/GetPayment"
//         method="POST"
//         style={{ display: "none" }}
//       >
//         <input type="hidden" name="EDP_LANGUAGE" value="EN" />
//         <input type="hidden" name="EDP_REC_ACCOUNT" value={IDRAM_ACCOUNT} />
//         <input type="hidden" name="EDP_DESCRIPTION" value="Order description" />
//         <input type="hidden" name="EDP_AMOUNT" value={amount} />
//         <input type="hidden" name="EDP_BILL_NO" value={billNo} />
//       </form>

//       <Stack
//         gap={{ base: "16px", md: "24px" }}
//         w={{ base: "100%", lg: "748px" }}
//         mx="auto"
//       >
//         <Stack
//           id="confirm"
//           as="form"
//           gap={{ base: "16px", md: "24px" }}
//           autoComplete="on"
//           onSubmit={submit}
//         >
//           <Animate>
//             <TitleDemo
//               language={data?.languages[0]}
//               urlExtension={data?.urlExtension}
//             />
//           </Animate>
//           <Animate>
//             <ConfirmDate value={data?.eventDate} />
//           </Animate>
//         </Stack>
//         <Animate>
//           <Promocode data={data?.pricing} />
//         </Animate>
//         <Animate>
//           <Payment legal={legal} payment={payment} setQuery={setQuery} />
//         </Animate>
//         <Animate>
//           <Pay onSubmit={submit} />
//         </Animate>
//       </Stack>

//       <Success
//         open={status === "success"}
//         setQuery={setQuery}
//         language={data?.languages[0]}
//         urlExtension={data?.urlExtension}
//         price={data?.finalPrice}
//       />
//       <Failed
//         open={status === "failed"}
//         setQuery={setQuery}
//         price={data?.finalPrice}
//       />
//     </Box>
//   );
// };

"use client";

import { parseAsString, useQueryStates } from "nuqs";
import { useRouter } from "@/i18n/routing";
import { useGetAuthTanstack, useMutateAuthTanstack } from "@/hooks/useTanstack";
import { Box, Stack } from "@chakra-ui/react";
import { error } from "@/components/ui/alerts";
import { Animate } from "@/components/ui/animate";
import { TitleDemo } from "@/components/build/titleDemo";
import { ConfirmDate } from "@/components/build/confirmDate";
import { Promocode } from "@/components/build/promocode";
import { Payment } from "@/components/build/payment";
import { Pay } from "@/components/build/pay";
import { Success } from "@/components/build/success";
import { Failed } from "@/components/build/failed";
import { cookie } from "@/lib/browser/cookie";

export const ConfirmClient = () => {
  const router = useRouter();

  const [{ template, palette, status, payment, id, legal }, setQuery] =
    useQueryStates({
      template: parseAsString,
      palette: parseAsString,
      status: parseAsString,
      payment: parseAsString,
      id: parseAsString,
      legal: parseAsString,
    });

  const { data } = useGetAuthTanstack(`invitations/${id}`, !!id);

  const { mutate } = useMutateAuthTanstack("payments/idram/initiate", "post", {
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
        // EDP_SUCCESS_URL: successUrl,
        // EDP_FAIL_URL: failUrl,
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
    onError: (err) => {
      error(err?.response?.data?.message);
    },
  });

  const submit = (e) => {
    e.preventDefault();
    if (payment === "idram") {
      cookie.set(
        "redirect",
        `?template=${template}&palette=${palette}&id=${id}&legal=true&payment=${payment}`,
      );
      mutate({ invitationId: id });
      // router.push("/build/module");
      return;
    }
  };
  // TODO: here we need remove cookie & setQuery status to null

  if (!data) {
    return null;
  }

  return (
    <Box pt={{ base: "32px", md: "48px" }} pb={{ base: "22px", md: "40px" }}>
      <Stack
        gap={{ base: "16px", md: "24px" }}
        w={{ base: "100%", lg: "748px" }}
        mx="auto"
      >
        <Stack
          id="confirm"
          as="form"
          gap={{ base: "16px", md: "24px" }}
          autoComplete="on"
          onSubmit={submit}
        >
          <Animate>
            <TitleDemo
              language={data?.languages[0]}
              urlExtension={data?.urlExtension}
            />
          </Animate>
          <Animate>
            <ConfirmDate value={data?.eventDate} />
          </Animate>
        </Stack>
        <Animate>
          <Promocode data={data?.pricing} />
        </Animate>
        <Animate>
          <Payment legal={legal} payment={payment} setQuery={setQuery} />
        </Animate>
        <Animate>
          <Pay onSubmit={submit} />
        </Animate>
      </Stack>
      <Success
        open={status === "success"}
        data={data}
        setQuery={setQuery}
      />
      <Failed
        open={status === "failed"}
        setQuery={setQuery}
        price={data?.pricing?.finalPrice}
      />
    </Box>
  );
};
