import { Scroll } from "../../components/ui/scroll";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Container, Stack } from "@chakra-ui/react";
import { success, error } from "../../components/ui/alerts";
import apiClient from "@/lib/apiClient";
import { Promocode } from "../../components/builder/promocode";
import { TitleDemo } from "../../components/builder/titleDemo";
import { ConfirmDate } from "../../components/builder/confirmDate";
import { Legal } from "../../components/builder/legal";
import { Payment } from "../../components/builder/payment";

const Confirm = () => {
  const navigate = useNavigate();

  const { language } = useParams();

  const [form, setForm] = useState();

  const submit = async (e) => {
    e.preventDefault();
    try {
      alert(159);
      const { data } = await apiClient.post(`/invitations`, form);

      if (data.status === "ok") {
        success("Basic Wedding Information Completed.");
        setForm();
        navigate(`/${language}/payment`);
      }
    } catch (err) {
      error(`Error - ${err}`);
    }
  };

  return (
    <Scroll animationKey="confirm">
      <Box pt="32px" pb="40px">
        <Container maxW="1104px" px={0}>
          <Stack gap="24px" w="864px" mx="auto">
            <Stack
              id="confirm"
              as="form"
              gap="24px"
              autoComplete="on"
              onSubmit={submit}
            >
              <TitleDemo />
              <ConfirmDate />
            </Stack>
            <Promocode />
            <Payment />
            <Legal />
          </Stack>
        </Container>
      </Box>
    </Scroll>
  );
};

export default Confirm;
