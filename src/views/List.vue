<script>
export default {
  name: 'List',
  data() {
    return {
      isRed: true,
      massiv: [
        {
          data: 1,
          title: 'sasha1',
          array: [
            {
              name: 'petya1',
            },
            {
              name: 'petya1',
            },
            {
              name: 'petya1',
            },
            {
              name: 'petya1',
            },
          ],
        },
        {
          data: 2,
          title: 'sasha2',
          array: [
            {
              name: 'petya2',
            },
            {
              name: 'petya2',
            },
            {
              name: 'petya2',
            },
            {
              name: 'petya2',
            },
          ],
        },
        {
          data: 3,
          title: 'sasha3',
          array: [
            {
              name: 'petya3',
            },
            {
              name: 'petya3',
            },
            {
              name: 'petya3',
            },
            {
              name: 'petya3',
            },
            {
              name: 'petya3',
            },
          ],
        },
        {
          data: 4,
          title: 'sasha4',
          array: [
            {
              name: 'petya4',
            },
            {
              name: 'petya4',
            },
            {
              name: 'petya4',
            },
            {
              name: 'petya4',
            },
            {
              name: 'petya4',
            },
          ],
        },
      ],
    };
  },
  render(h) {
    const newArray = this.massiv.map((element) => {
      const subArray = element.array.map(subElement => (
        h('span', subElement.name)
      ));
      return (
        h('div', [element.title, subArray])
      );
    });
    return h('div', {
      class: {
        'is-red': this.isRed,
      },
    }, [newArray]);
  },
};
</script>

<style scoped>

</style>
