async function submitForm(formData) {
  try {
    // Replace 'YOUR_JOTFORM_API_KEY' with your actual key
    const response = await fetch('https://api.jotform.com/form/YOUR_FORM_ID/submissions?apiKey=YOUR_JOTFORM_API_KEY', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ submissions: [formData] })
    });
    return await response.json();
  } catch (error) {
    console.error('Form submission failed', error);
    throw error;
  }
}
