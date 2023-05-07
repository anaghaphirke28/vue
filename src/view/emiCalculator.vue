<template>
  <div class="m-3">
    <v-row class="elevation-3 light-blue lighten-5">
      <v-col class="text-center blue--text text-decoration-underline text-sm-h4">
        EMI Calculator
      </v-col>
    </v-row>
    <v-row align="center" justify="center" class="pt-2">
      <v-col sm="6">
        <v-text-field
            v-model="loanAmount"
            label="Loan Amount"
            type="number"
            outlined
            suffix="₹"
            :dense="true"
            :rules="[(v) => v > 100000 || 'Invalid']"
        ></v-text-field>
        <v-slider
            v-model="loanAmount"
            min="0"
            max="10000000"
            step="1"
            track-color="orange darken-3"
            track-fill-color="orange darken-3"
            thumb-color="orange darken-3"
        ></v-slider>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col sm="6">
        <v-text-field
            v-model="interestRate"
            label="Interest Rate"
            type="number"
            outlined
            suffix="%"
            :dense="true"
            :rules="[(v) => v > 0 || 'Invalid']"
        ></v-text-field>
        <v-slider
            v-model="interestRate"
            min="0"
            max="100"
            step="0.1"
            track-color="orange darken-3"
            track-fill-color="orange darken-3"
            thumb-color="orange darken-3"
        ></v-slider>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col sm="6">
        <v-text-field
            v-model="loanTenure"
            label="Loan Tenure"
            type="number"
            outlined
            class="loan-tenure-input"
            :dense="true"
            :rules="[(v) => v > 0 || 'Invalid']"
        >
          <template #append>
            <div class="loan-tenure-suffix-buttons">
              <v-btn
                  text
                  :class="['suffix-button', { active: selectedSuffix === 'Yr' }]"
                  @click="selectedSuffix = 'Yr'"
              >
                Yr
              </v-btn>
              <v-btn
                  text
                  :class="['suffix-button', { active: selectedSuffix === 'Mo' }]"
                  @click="selectedSuffix = 'Mo'"
              >
                Mo
              </v-btn>
            </div>
          </template>
        </v-text-field>
        <v-slider
            v-model="loanTenure"
            min="0"
            max="30"
            step="10"
            track-color="orange darken-3"
            track-fill-color="orange darken-3"
            thumb-color="orange darken-3"
            :ticks="true"
            tick-size="6"
            :tick-labels="tenureTicks"
            thumb-label-always
            thumb-size="32"
        >
        </v-slider>
        <v-row justify="center">
          <v-col cols="6" class="text-center">
            <div class="column">
              <div class="row-item"><span class = loanLabel>EMI : </span><span class = "loanNumber">₹{{getEMI}}</span></div>
              <div class="row-item"><span class = loanLabel>Total Interest : </span><span class = "loanNumber">₹{{getTotalInterest}}</span></div>
              <div class="row-item"><span class = loanLabel>Total Amount : </span><span class = "loanNumber">₹{{getTotalAmountPayable}}</span></div>
            </div>
          </v-col>
          <v-col cols="6" class="text-center">
            <PieChart :data = getPieChartData />
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col sm="6" class="elevation-3">
        <emi-table :loanAmount = parseInt(loanAmount)
               :interestRate = parseInt(interestRate)
               :loanTerm = parseInt(loanTenure)>
        </emi-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>

import emiTable from "@/components/emiTable";
import PieChart from '@/components/Pie'

export default {
  name: "emiCalculator",
  data() {
    return {
      loanAmount: 0,
      interestRate: 0,
      loanTenure: 0,
      loanTerm:0,
      selectedSuffix: null,
      tenureTicks: [0,10,20, 30,]
    };
  },
  components:{
    emiTable,
    PieChart
  },
  computed:{
    getEMI(){
      let r = this.interestRate/12/100
      let loanTerm = this.selectedSuffix == "MO" ? this.loanTenure : this.loanTenure * 12
      let numerator = Math.pow((1 + r),loanTerm)
      let denominator = (Math.pow((1 + r),loanTerm) - 1)
      let final = this.loanAmount*r*(numerator/denominator)
      return isNaN(final) || final == 'infinity' ? 0 :Math.ceil(final)
    },
    getTotalAmountPayable(){
      let emi = this.getEMI
      let loanTerm = this.selectedSuffix == "MO" ? this.loanTenure : this.loanTenure * 12
      let totalAmount = emi * loanTerm
      return Math.ceil(totalAmount)
    },
    getTotalInterest(){
      let getTotalAmount = this.getTotalAmountPayable
      let totalInterest = (getTotalAmount - this.loanAmount)
      return Math.ceil(totalInterest)
    },
    getPieChartData(){
      let data = [];
      let interest = (this.getTotalInterest / this.getTotalAmountPayable)*100
      data.push(parseFloat(interest.toFixed(2)))
      data.push(parseFloat((100-interest).toFixed(2)))
      return data
    }
  }
}
</script>

<style>
.suffix-button.active {
  background-color: grey;
  color: black;
}
.loan-tenure-input .v-text-field__suffix {
  top: 20px;
}
.loan-tenure-suffix-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 0;
  right: 8px;
  height: 100%;
}
.loan-tenure-suffix-buttons v-btn {
  height: 100%;
}
.loanLabel{
  font-size: 1.5rem;
}
.loanNumber{
  color: #ff1493;
  font-size: 1.5rem;

}
.column {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.row-item {
  height: 100%;
}
</style>
