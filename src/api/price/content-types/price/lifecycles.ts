module.exports = {
  async beforeCreate(event: any) {
    const { data } = event.params;
    if (data.hotel && data.company) {
      data.identification = `${data.company}-${data.hotel}`;
    }

    if (data.hotel) {
      data.identification = data.hotel
    } else {
      data.identification = data.company
    }
  },

  async beforeUpdate(event: any) {
    const { data } = event.params;
    if (data.hotel && data.company) {
      data.identification = `${data.company}-${data.hotel}`;
    }

    if (data.hotel) {
      data.identification = data.hotel
    } else {
      data.identification = data.company
    }
  },
};
