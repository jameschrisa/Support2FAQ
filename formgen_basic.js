import React, { useState } from 'react';
import { Form, FormField, Input, Select, Textarea, Button } from '@chakra-ui/core';

const CustomerSupportForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issueType: '',
    description: '',
    steps: '',
    additional: '',
    attachments: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // add code to submit form data to the server
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormField label="Name" htmlFor="name">
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </FormField>
      <FormField label="Email" htmlFor="email">
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </FormField>
      <FormField label="Issue Type">
        <Select
          name="issueType"
          value={formData.issueType}
          onChange={handleChange}
          required
        >
          <option value="">Select an option</option>
          <option value="Bug Report">Bug Report</option>
          <option value="Feature Request">Feature Request</option>
          <option value="Question">Question</option>
        </Select>
      </FormField>
      <FormField label="Description" htmlFor="description">
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </FormField>
      <FormField label="Steps to Reproduce (if a bug)" htmlFor="steps">
        <Textarea
          id="steps"
          name="steps"
          value={formData.steps}
          onChange={handleChange}
        />
      </FormField>
      <FormField label="Additional Information" htmlFor="additional">
        <Textarea
          id="additional"
          name="additional"
          value={formData.additional}
          onChange={handleChange}
        />
      </FormField>
      <FormField label="Attachments" htmlFor="attachments">
        <Input
          type="file"
          id="attachments"
          name="attachments"
          value={formData.attachments}
          onChange={handleChange}
        />
      </FormField>
      <Button type="submit" mt={4} variantColor="teal">
        Submit
      </Button>
    </Form>
  );
};

export default CustomerSupportForm;
