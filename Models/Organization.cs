using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NetCoreAngular.Models
{
    public class Organization
    {
        public int id_organization { get; set; }
        public string name { get; set; }
        public string address { get; set; }
        public DateTime reg_date { get; set; }
    }
}
