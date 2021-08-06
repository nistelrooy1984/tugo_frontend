<template>
  <div>
    <h1>Contacts</h1>
    {{ this.get_contacts_data }}
  </div>
</template>

<script>
/**
 * import
 */
import { mapGetters } from 'vuex'

/**
 * Vue
 */
export default {
  /**
   * computed
   */
  computed: {
    ...mapGetters('contacts', ['get_contacts_data']),
  },
}
</script>

<style>
</style>
