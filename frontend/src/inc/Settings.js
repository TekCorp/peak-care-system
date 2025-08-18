// default settings for project / containing, API related things -

export const Settings = {
    alert: function(message, messageType = 'success') {
        const alertBox = document.createElement('div');
        alertBox.classList.add('alert', messageType === 'error' ? 'failure' : 'success');
        alertBox.textContent = message;
        document.body.insertBefore(alertBox, document.body.firstChild);
        setTimeout(() => {
          alertBox.remove();
        }, 3000);
    }
  }