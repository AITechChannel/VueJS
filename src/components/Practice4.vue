<template>
  <Form v-slot="{ values }" @submit="onSubmit" :validation-schema="schema">
    <Field name="email" type="email" placeholder="Please input email" />
    <ErrorMessage name="email" />
    <Field name="password" type="password" />
    <ErrorMessage name="password" />
    <button>Submit</button>
    <pre>{{ values }}</pre>
  </Form>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    });
    return {
      schema,
    };
  },
  methods: {
    onSubmit(values) {
      // Submit values to API...
      // alert(JSON.stringify(values, null, 2));
    },
  },
};
</script>
