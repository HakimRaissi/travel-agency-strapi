module.exports = {
  async beforeCreate(event: any) {
    const { data } = event.params;
    data.identification = `${data.start}-${data.end}-${data.price}`;
  },

  async beforeUpdate(event: any) {
    const { data } = event.params;
    data.identification = `${data.start}-${data.end}-${data.price}`;
  },
};
