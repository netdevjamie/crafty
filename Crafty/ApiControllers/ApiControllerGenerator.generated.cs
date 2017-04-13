

using System.Linq;
using System.Web.Http.OData;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.OData.Builder;
using System.Web.Http.Cors;



namespace Crafty.ApiControllers
{
    public static class ApiControllerHelpers
    {
        public static void BuildApiEntities(this ODataConventionModelBuilder builder)
        {

            builder.EntitySet<Equipment>("Equipments"); // Equipments
            builder.EntitySet<Extract>("Extracts"); // Extracts
            builder.EntitySet<Grain>("Grains"); // Grains
            builder.EntitySet<Hop>("Hops"); // Hops
            builder.EntitySet<Recipe>("Recipes"); // Recipes
            builder.EntitySet<RecipeType>("RecipeTypes"); // RecipeTypes
            builder.EntitySet<Style>("Styles"); // Styles
            builder.EntitySet<Water>("Waters"); // Waters
            builder.EntitySet<Yeast>("Yeasts"); // Yeasts
        }

    }

    //[EnableCors(origins: "http://127.0.0.1:81", headers: "*", methods: "*")]
    [EnableCors(origins: "http://192.168.1.9:27246", headers: "*", methods: "*")]
    public class ExtractsController : ODataController
    {
        readonly CraftyDBEntities _db;

        public ExtractsController() { _db = new CraftyDBEntities(); }


        public ExtractsController(CraftyDBEntities db)
        {
            _db = db;
        }

        /// GET api/Extracts
        public IQueryable<Extract> Get()
        {
            return _db.Extracts;
        }

        // GET api/Extracts/5
        public Extract Get(int id) // Grains
        {
            return _db.Extracts.FirstOrDefault(x => x.ExtractId == id);
        }

    }


    public class EquipmentsController : ODataController
    {
        readonly CraftyDBEntities _db;

        public EquipmentsController() { _db = new CraftyDBEntities(); }

        public EquipmentsController(CraftyDBEntities db)
        {
            _db = db;
        }

        /// GET api/Equipment
        public IQueryable<Equipment> Get()
        {
            return _db.Equipments;
        }

        // GET api/Equipment/5
        public Equipment Get(int id) // Equipments
        {
            return _db.Equipments.FirstOrDefault(x => x.EquipmentId == id);
        }

    }

    public class GrainsController : ODataController
    {
        readonly CraftyDBEntities _db;

        public GrainsController() { _db = new CraftyDBEntities(); }

        public GrainsController(CraftyDBEntities db)
        {
            _db = db;
        }

        /// GET api/Grain
        public IQueryable<Grain> Get()
        {
            return _db.Grains;
        }

        // GET api/Grain/5
        public Grain Get(int id) // Grains
        {
            return _db.Grains.FirstOrDefault(x => x.GrainId == id);
        }

    }

    [EnableCors(origins: "http://127.0.0.1:81", headers: "*", methods: "*")]
    public class HopsController : ODataController
    {
        readonly CraftyDBEntities _db;

        public HopsController() { _db = new CraftyDBEntities(); }

        public HopsController(CraftyDBEntities db)
        {
            _db = db;
        }

        /// GET api/Hop
        public IQueryable<Hop> Get()
        {
            var x = _db.Hops;
            return x;
        }

        // GET api/Hop/5
        public Hop Get(int id) // Hops
        {
            return _db.Hops.FirstOrDefault(x => x.HopsId == id);
        }

    }

    public class RecipesController : ODataController
    {
        readonly CraftyDBEntities _db;

        public RecipesController() { _db = new CraftyDBEntities(); }

        public RecipesController(CraftyDBEntities db)
        {
            _db = db;
        }

        /// GET api/Recipe
        public IQueryable<Recipe> Get()
        {
            return _db.Recipes;
        }

        // GET api/Recipe/5
        public Recipe Get(int id) // Recipes
        {
            return _db.Recipes.FirstOrDefault(x => x.RecipeId == id);
        }

    }

    public class RecipeTypesController : ODataController
    {
        readonly CraftyDBEntities _db;

        public RecipeTypesController() { _db = new CraftyDBEntities(); }

        public RecipeTypesController(CraftyDBEntities db)
        {
            _db = db;
        }

        /// GET api/RecipeType
        public IQueryable<RecipeType> Get()
        {
            return _db.RecipeTypes;
        }

        // GET api/RecipeType/5
        public RecipeType Get(int id) // RecipeTypes
        {
            return _db.RecipeTypes.FirstOrDefault(x => x.RecipeTypeId == id);
        }

    }

    public class StylesController : ODataController
    {
        readonly CraftyDBEntities _db;

        public StylesController() { _db = new CraftyDBEntities(); }

        public StylesController(CraftyDBEntities db)
        {
            _db = db;
        }

        /// GET api/Style
        public IQueryable<Style> Get()
        {
            return _db.Styles;
        }

        // GET api/Style/5
        public Style Get(int id) // Styles
        {
            return _db.Styles.FirstOrDefault(x => x.StyleId == id);
        }

    }

    public class WatersController : ODataController
    {
        readonly CraftyDBEntities _db;

        public WatersController() { _db = new CraftyDBEntities(); }

        public WatersController(CraftyDBEntities db)
        {
            _db = db;
        }

        /// GET api/Water
        public IQueryable<Water> Get()
        {
            return _db.Waters;
        }

        // GET api/Water/5
        public Water Get(int id) // Waters
        {
            return _db.Waters.FirstOrDefault(x => x.WaterId == id);
        }

    }

    public class YeastsController : ODataController
    {
        readonly CraftyDBEntities _db;

        public YeastsController() { _db = new CraftyDBEntities(); }

        public YeastsController(CraftyDBEntities db)
        {
            _db = db;
        }

        /// GET api/Yeast
        public IQueryable<Yeast> Get()
        {
            return _db.Yeasts;
        }

        // GET api/Yeast/5
        public Yeast Get(int id) // Yeasts
        {
            return _db.Yeasts.FirstOrDefault(x => x.YeastId == id);
        }

    }
    
    public class ValuesOController : ODataController
    {
            /// GET api/ValuesO
        public IEnumerable<string> Get()
        {
            return new string[] { "value1OData", "value2OData" };
        }
        
        /// GET api/ValuesO/5
        public string Get(int id)
        {
            return "OData";
        }
    }

    public class ValuesController : ApiController
    {
        /// GET api/Values
        public IEnumerable<string> Get()
        {
            return new string[] { "apiValue1", "apiValue2" };
        }
    
        /// GET api/Values/5
        public string Get(int id)
        {
            return "apiValue";
        }
    }
    }