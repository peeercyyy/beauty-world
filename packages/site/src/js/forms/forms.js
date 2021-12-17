import ApiService from '../services/api-services.js';

const loader = document.getElementById('loader');
const success = document.getElementById('success-form');
export class OrderForm {
    constructor(forms) {
        this.form = forms;
        const { elements } = forms;

        function Custumer(name = '', phone = '', masterId = 0, serviceId = 0, visitDate = '') {
            this.name = name;
            this.phone = phone;
            this.masterId = Number(masterId);
            this.serviceId = Number(serviceId);
            if (visitDate !== '') {
                this.visitDate = new Date(visitDate).toISOString();
            } else {
                this.visitDate = visitDate;
            }
        }

        forms.addEventListener('submit', async (element) => {
            element.preventDefault();

            const data = Array.from(elements)
                .filter((item) => !!item.name)
                .reduce((acc, element) => {
                    const { name, value } = element;
                    acc[name] = value;
                    return acc;
                });

            const result = await ApiService.createOrder(new Custumer(data?.name, data?.phone, data?.masterId, data?.serviceId, data?.visitDate));
        
            loader.style.display = 'block';
            
            if (result === result.ok) {
            loader.style.display = 'none';
            success.style.display = 'block';
            result.setTimeout(() => {
                success.style.display = 'none';
            }, 3000);
            }
            

            forms.reset();
        });
    }
}




  
    
    


