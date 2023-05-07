<template>
  <v-data-table
      hide-default-footer
      :items-per-page=-1
      :headers="headers"
      :items="yearlyData"
      class="elevation-1 grey lighten-3"
      item-key="year"
      :single-expand="singleExpand"
      show-expand
      :dense="true"
      :expanded.sync="expanded"
  >
    <template v-slot:expanded-item="{ headers, item, isMobile }">
      <td v-if = "!isMobile" :colspan="headers.length" class="pt-3 pb-3">
        <v-data-table
            hide-default-footer
            :items-per-page=-1
            :headers="monthlyHeaders"
            :items="item.monthwise"
            class="elevation-1"
        ></v-data-table>
      </td>
      <div v-else class="pt-3 pb-3">{{isMobile}}
        <v-data-table
            hide-default-footer
            :items-per-page=-1
            :headers="monthlyHeaders"
            :items="item.monthwise"
            class="elevation-1"
        ></v-data-table>
      </div>
    </template>
    <template v-slot:[`item.data-table-expand`]="{item, isExpanded}">
      <v-icon
          @click="handleExpansion(item, isExpanded)"
      >{{ isExpanded ? 'mdi-minus' : 'mdi-plus' }}</v-icon>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "emiTable",
  props: {
    loanAmount: Number,
    interestRate: Number,
    loanTerm: Number,
  },
  data(){
    return{
      singleExpand: true,
      expanded: [],
    }
  },
  computed: {
    headers() {
      return [
        { text: '', value: 'data-table-expand',class:"light-blue lighten-5"},
        { text: "Year", value: "year",class:"light-blue lighten-5" },
        { text: "Principal", value: "principal",class:"light-blue lighten-5"},
        { text: "Interest", value: "interest",class:"light-blue lighten-5"},
        { text: "Total Payment", value: "totalPayment",class:"light-blue lighten-5" },
        { text: "Ending Balance", value: "endingBalance",class:"light-blue lighten-5" },
        { text: "Loan Paid to Date", value: "loanPaidToDate",class:"light-blue lighten-5"},
      ];
    },
    monthlyHeaders(){
      return [
        { text: "Month", value: "month",class:"light-blue lighten-4" },
        { text: "Principal", value: "principal",class:"light-blue lighten-4"  },
        { text: "Interest", value: "interest",class:"light-blue lighten-4" },
        { text: "Total Payment", value: "totalPayment",class:"light-blue lighten-4"  },
        { text: "Ending Balance", value: "endingBalance",class:"light-blue lighten-4"  },
        { text: "Loan Paid to Date", value: "loanPaidToDate",class:"light-blue lighten-4"  },
      ];
    },
    yearlyData() {
      const annualInterestRate = this.interestRate;
      const numberOfYears = Math.ceil(this.loanTerm / 12);
      const monthlyInterestRate = annualInterestRate / 12/100;
      const monthlyPayment =
          (this.loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, this.loanTerm)) /
          (Math.pow(1 + monthlyInterestRate, this.loanTerm) - 1);
      let remainingBalance = this.loanAmount;
      let yearlyRemainingBalance = this.loanAmount;
      let data = [];
      let YData = [];
      let currentYear = new Date().getFullYear();
      let currentMonth = new Date().getMonth() ;
      let yearData = {
        year: currentYear,
        principal: 0,
        interest: 0,
        endingBalance: 0,
        loanPaidToDate: 0,
        monthwise:[]
      }
      for (let i = 0; i < numberOfYears; i++) {

        let monthData = {
          year: currentYear,
          month: "",
          principal: 0,
          interest: 0,
          totalPayment:0,
          endingBalance: 0,
          loanPaidToDate: 0,
        };
        data = []
        yearData.principal = 0
        yearData.interest = 0
        for (let j = currentMonth; j < 12; j++) {
          let monthInterest = remainingBalance * monthlyInterestRate;
          let monthPrincipal = monthlyPayment - monthInterest;
          let monthEndingBalance = remainingBalance - monthPrincipal;
          let loanPaidToDate = monthPrincipal / remainingBalance;
          remainingBalance = monthEndingBalance;
          monthData.month = this.getMonthName(j);
          monthData.principal = Math.ceil(monthPrincipal);
          monthData.interest = Math.ceil(monthInterest);
          monthData.endingBalance = Math.ceil(monthEndingBalance);
          monthData.loanPaidToDate = (loanPaidToDate * 100).toFixed(2) + '%';
          yearData.principal += Math.ceil(monthData.principal)
          yearData.interest += Math.ceil(monthData.interest)
          monthData.totalPayment = monthData.principal + monthData.interest

          data.push({...monthData});

        }
        yearData.year = currentYear
        yearData.totalPayment = yearData.principal + yearData.interest
        yearData.endingBalance = Math.ceil(yearlyRemainingBalance - yearData.principal) < 0 ? 0 : Math.ceil(yearlyRemainingBalance - yearData.principal);
        yearData.loanPaidToDate = Math.ceil((yearData.principal / yearlyRemainingBalance)*100) > 100 ? 100  + '%' : Math.ceil((yearData.principal / yearlyRemainingBalance)*100)  + '%';
        yearlyRemainingBalance = Math.ceil(yearData.endingBalance)
        yearData.monthwise = data
        YData.push({ ...yearData });
        currentYear++;
        currentMonth = 0;
      }
      console.log("yearData",YData)
      return YData;
    },
  },
  methods: {
    getMonthName(monthIndex) {
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];
      return months[monthIndex];
    },
    handleExpansion(item, state) {
      const itemIndex = this.expanded.indexOf(item);
      state ? this.expanded.splice(itemIndex, 1) : this.expanded.push(item);
    },
  },

};
</script>

<style scoped>
th {
  text-align: left;
}
.headerCell{
  font-size: large;
  color: #000000;
}
</style>
