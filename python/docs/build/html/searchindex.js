Search.setIndex({docnames:["advanced/feature_layer","advanced/index","advanced/preprocessing","advanced/transfer_learning","api/feature_config","api/feature_layer","api/feature_processing","api/file_io","api/index","api/interaction_model","api/losses","api/metrics","api/pipeline","api/relevance_dataset","api/relevance_model","api/scorer","index","installation/index","misc/contact","misc/faq","misc/license","quickstart/dataset","quickstart/feature_config","quickstart/index","quickstart/library","quickstart/model_config","quickstart/saving","quickstart/script","quickstart/serving"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:56},filenames:["advanced/feature_layer.md","advanced/index.rst","advanced/preprocessing.md","advanced/transfer_learning.md","api/feature_config.rst","api/feature_layer.rst","api/feature_processing.rst","api/file_io.rst","api/index.rst","api/interaction_model.rst","api/losses.rst","api/metrics.rst","api/pipeline.rst","api/relevance_dataset.rst","api/relevance_model.rst","api/scorer.rst","index.rst","installation/index.md","misc/contact.md","misc/faq.md","misc/license.md","quickstart/dataset.md","quickstart/feature_config.md","quickstart/index.rst","quickstart/library.md","quickstart/model_config.md","quickstart/saving.md","quickstart/script.md","quickstart/serving.md"],objects:{"ml4ir.applications.classification.model.losses.categorical_cross_entropy":{CategoricalCrossEntropy:[10,0,1,""]},"ml4ir.applications.classification.model.losses.categorical_cross_entropy.CategoricalCrossEntropy":{get_final_activation_op:[10,1,1,""],get_loss_fn:[10,1,1,""]},"ml4ir.applications.classification.pipeline":{ClassificationPipeline:[12,0,1,""]},"ml4ir.applications.classification.pipeline.ClassificationPipeline":{get_relevance_dataset:[12,1,1,""],get_relevance_model:[12,1,1,""]},"ml4ir.applications.ranking.model.losses.listwise_losses":{RankOneListNet:[10,0,1,""]},"ml4ir.applications.ranking.model.losses.listwise_losses.RankOneListNet":{get_final_activation_op:[10,1,1,""],get_loss_fn:[10,1,1,""]},"ml4ir.applications.ranking.model.losses.pointwise_losses":{SigmoidCrossEntropy:[10,0,1,""]},"ml4ir.applications.ranking.model.losses.pointwise_losses.SigmoidCrossEntropy":{get_final_activation_op:[10,1,1,""],get_loss_fn:[10,1,1,""]},"ml4ir.applications.ranking.model.metrics.metrics_impl":{ACR:[11,0,1,""],CategoricalAccuracy:[11,0,1,""],MRR:[11,0,1,""]},"ml4ir.applications.ranking.model.ranking_model":{RankingModel:[14,2,0,"-"]},"ml4ir.applications.ranking.pipeline":{RankingPipeline:[12,0,1,""]},"ml4ir.applications.ranking.pipeline.RankingPipeline":{get_relevance_model:[12,1,1,""],validate_args:[12,1,1,""]},"ml4ir.base.data":{csv_reader:[13,2,0,"-"],tfrecord_reader:[13,2,0,"-"],tfrecord_writer:[13,2,0,"-"]},"ml4ir.base.data.csv_reader":{read:[13,3,1,""]},"ml4ir.base.data.relevance_dataset":{RelevanceDataset:[13,0,1,""]},"ml4ir.base.data.relevance_dataset.RelevanceDataset":{balance_classes:[13,1,1,""],create_dataset:[13,1,1,""],train_val_test_split:[13,1,1,""]},"ml4ir.base.data.tfrecord_reader":{get_parse_fn:[13,3,1,""],make_example_parse_fn:[13,3,1,""],make_sequence_example_parse_fn:[13,3,1,""],preprocess_feature:[13,3,1,""],read:[13,3,1,""]},"ml4ir.base.data.tfrecord_writer":{define_arguments:[13,3,1,""],main:[13,3,1,""],write_from_df:[13,3,1,""],write_from_files:[13,3,1,""]},"ml4ir.base.features":{preprocessing:[6,2,0,"-"]},"ml4ir.base.features.feature_config":{ExampleFeatureConfig:[4,0,1,""],FeatureConfig:[4,0,1,""],SequenceExampleFeatureConfig:[4,0,1,""]},"ml4ir.base.features.feature_config.ExampleFeatureConfig":{create_dummy_protobuf:[4,1,1,""]},"ml4ir.base.features.feature_config.FeatureConfig":{create_dummy_protobuf:[4,1,1,""],define_features:[4,1,1,""],define_inputs:[4,1,1,""],extract_features:[4,1,1,""],get_all_features:[4,1,1,""],get_default_value:[4,1,1,""],get_dtype:[4,1,1,""],get_feature:[4,1,1,""],get_features_to_log:[4,1,1,""],get_group_metrics_keys:[4,1,1,""],get_hyperparameter_dict:[4,1,1,""],get_instance:[4,1,1,""],get_label:[4,1,1,""],get_metadata_features:[4,1,1,""],get_query_key:[4,1,1,""],get_secondary_labels:[4,1,1,""],get_train_features:[4,1,1,""],initialize_features:[4,1,1,""],log_initialization:[4,1,1,""],set_feature:[4,1,1,""]},"ml4ir.base.features.feature_config.SequenceExampleFeatureConfig":{create_dummy_protobuf:[4,1,1,""],define_features:[4,1,1,""],define_inputs:[4,1,1,""],extract_features:[4,1,1,""],generate_mask:[4,1,1,""],get_context_features:[4,1,1,""],get_mask:[4,1,1,""],get_rank:[4,1,1,""],get_sequence_features:[4,1,1,""],initialize_features:[4,1,1,""],log_initialization:[4,1,1,""]},"ml4ir.base.features.feature_fns":{categorical:[5,2,0,"-"]},"ml4ir.base.features.feature_fns.categorical":{CategoricalDropout:[5,0,1,""],VocabLookup:[5,0,1,""],categorical_embedding_to_encoding_bilstm:[5,3,1,""],categorical_embedding_with_hash_buckets:[5,3,1,""],categorical_embedding_with_indices:[5,3,1,""],categorical_embedding_with_vocabulary_file:[5,3,1,""],categorical_embedding_with_vocabulary_file_and_dropout:[5,3,1,""],categorical_indicator_with_vocabulary_file:[5,3,1,""],categorical_indices_from_vocabulary_file:[5,3,1,""],get_vocabulary_info:[5,3,1,""]},"ml4ir.base.features.feature_fns.categorical.CategoricalDropout":{call:[5,1,1,""],get_config:[5,1,1,""]},"ml4ir.base.features.feature_fns.categorical.VocabLookup":{build:[5,1,1,""],call:[5,1,1,""],default_value:[5,4,1,""],feature_name:[5,4,1,""],get_config:[5,1,1,""],lookup_table:[5,4,1,""],num_oov_buckets:[5,4,1,""],vocabulary_list:[5,4,1,""]},"ml4ir.base.features.preprocessing":{get_one_hot_label_vectorizer:[6,3,1,""],natural_log:[6,4,1,""],preprocess_text:[6,4,1,""],split_and_pad_string:[6,4,1,""]},"ml4ir.base.io.file_io":{FileIO:[7,0,1,""]},"ml4ir.base.io.file_io.FileIO":{clear_dir:[7,1,1,""],get_files_in_directory:[7,1,1,""],log:[7,1,1,""],make_directory:[7,1,1,""],path_exists:[7,1,1,""],read_df:[7,1,1,""],read_df_list:[7,1,1,""],read_json:[7,1,1,""],read_text_file:[7,1,1,""],read_yaml:[7,1,1,""],rm_dir:[7,1,1,""],rm_file:[7,1,1,""],set_logger:[7,1,1,""],write_df:[7,1,1,""],write_json:[7,1,1,""]},"ml4ir.base.io.local_io":{LocalIO:[7,0,1,""]},"ml4ir.base.io.local_io.LocalIO":{clear_dir_contents:[7,1,1,""],get_files_in_directory:[7,1,1,""],load_numpy_array:[7,1,1,""],make_directory:[7,1,1,""],path_exists:[7,1,1,""],read_df:[7,1,1,""],read_df_list:[7,1,1,""],read_json:[7,1,1,""],read_yaml:[7,1,1,""],rm_dir:[7,1,1,""],rm_file:[7,1,1,""],save_numpy_array:[7,1,1,""],write_df:[7,1,1,""],write_json:[7,1,1,""]},"ml4ir.base.io.spark_io":{SparkIO:[7,0,1,""]},"ml4ir.base.io.spark_io.SparkIO":{copy_from_hdfs:[7,1,1,""],copy_to_hdfs:[7,1,1,""],get_path_from_str:[7,1,1,""],path_exists:[7,1,1,""],read_df:[7,1,1,""],read_df_list:[7,1,1,""],read_json:[7,1,1,""],read_text_file:[7,1,1,""],read_yaml:[7,1,1,""],rm_dir:[7,1,1,""],rm_file:[7,1,1,""]},"ml4ir.base.model.losses.loss_base":{RelevanceLossBase:[10,0,1,""]},"ml4ir.base.model.losses.loss_base.RelevanceLossBase":{get_final_activation_op:[10,1,1,""],get_loss_fn:[10,1,1,""]},"ml4ir.base.model.relevance_model":{RelevanceModel:[14,0,1,""]},"ml4ir.base.model.relevance_model.RelevanceModel":{evaluate:[14,1,1,""],fit:[14,1,1,""],from_relevance_scorer:[14,1,1,""],from_univariate_interaction_model:[14,1,1,""],is_compiled:[14,4,1,""],load:[14,1,1,""],load_weights:[14,1,1,""],predict:[14,1,1,""],save:[14,1,1,""]},"ml4ir.base.model.scoring.interaction_model":{InteractionModel:[9,0,1,""],UnivariateInteractionModel:[9,0,1,""]},"ml4ir.base.model.scoring.interaction_model.InteractionModel":{feature_layer_op:[9,1,1,""],transform_features_op:[9,1,1,""]},"ml4ir.base.model.scoring.interaction_model.UnivariateInteractionModel":{feature_layer_op:[9,1,1,""],transform_features_op:[9,1,1,""]},"ml4ir.base.model.scoring.scoring_model":{RelevanceScorer:[15,0,1,""],ScorerBase:[15,0,1,""]},"ml4ir.base.model.scoring.scoring_model.RelevanceScorer":{architecture_op:[15,1,1,""],final_activation_op:[15,1,1,""]},"ml4ir.base.model.scoring.scoring_model.ScorerBase":{architecture_op:[15,1,1,""],final_activation_op:[15,1,1,""],from_model_config_file:[15,1,1,""]},"ml4ir.base.pipeline":{RelevancePipeline:[12,0,1,""]},"ml4ir.base.pipeline.RelevancePipeline":{finish:[12,1,1,""],get_relevance_dataset:[12,1,1,""],get_relevance_model:[12,1,1,""],run:[12,1,1,""],set_seeds:[12,1,1,""],setup_logging:[12,1,1,""],validate_args:[12,1,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","module","Python module"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:method","2":"py:module","3":"py:function","4":"py:attribute"},terms:{"1st":5,"abstract":[5,7],"boolean":[4,7,14],"byte":5,"case":[6,12,27],"char":5,"class":[4,5,7,9,10,11,12,13,14,15,20,27],"default":[5,14,27],"export":17,"final":[5,10,15,27],"float":[5,6,13,14,27],"function":[1,6,9,10,13,14,16,27],"import":20,"int":[5,6,7,9,13,14,27],"new":[11,14,17],"null":5,"return":[4,5,6,7,9,10,13,14],"short":27,"static":4,"true":[4,7,12,13,14,27],"try":27,"while":[7,16,20,27],AND:20,And:5,FOR:20,For:[11,18,20],Has:27,IDs:5,NOT:7,Not:20,The:[5,16,20,27],There:16,These:[5,27],USE:20,Use:[14,27],Used:[7,13,27],Using:[1,16,23],Will:[4,27],__init__:11,_failur:12,_imag:[],_loss_fn:10,_success:12,aaa:6,about:17,abov:[4,5,20,27],absent:5,accept:20,accuraci:11,achiev:16,acr:[11,27],across:[4,27],act:[9,20],action:12,activ:[10,15,17],actual:27,adam:27,add:[4,16,20,27],added:[6,14],addendum:20,addit:[4,5,9,14,20,27],addition:[4,10,14],additional_featur:14,advanc:16,advis:20,after:[6,9],against:20,aggreg:14,agre:20,agreement:20,ahfhfhf:[],all:[4,13,14,16,17,20,24,27],all_featur:4,alleg:20,allow:[5,7,14,16,27],allow_pickl:7,alon:[16,20],along:20,alongsid:20,alreadi:5,also:[5,14,16,20,27],amount:16,ani:[11,14,16,18,20],annot:20,apach:20,api:16,api_doc:[5,27],appear:20,appendix:20,appli:[5,9,20],applic:[10,11,12,16,20,27],approach:16,appropri:20,architectur:[15,16,23,27],architecture_op:15,archiv:20,arg:[5,12,13],argpars:12,argument:[4,5,6,11,13,16,23],argv:[],aris:20,around:[5,11],arrai:[7,14],arsen:16,art:27,ashish:18,ask:[],assert:20,assign:[4,5,27],associ:20,assum:20,attach:20,attribut:[4,20],author:20,authorship:20,auto:16,autogener:27,avail:20,averag:11,averageclickrank:[8,16],balanc:13,balance_class:13,base:[4,5,6,7,9,10,11,12,13,14,15,16,17,20,27],base_lay:5,basi:20,batch:[4,13,14,27],batch_siz:[13,27],bbb:6,becaus:5,been:[9,20],befor:[6,27],behalf:20,below:20,benefici:20,best:[4,27],better:13,bharadwaj:18,bia:10,bilstm:5,bin:17,binari:27,bind:20,boilerpl:20,bool:[4,6,7,13,14,27],both:16,bottom:13,box:16,bracket:20,briefli:24,browser:[],bucket:5,build:[5,16,17,27],built:16,calcul:11,call:5,callback:27,callbacksml4ir:27,can:[4,5,7,9,10,11,14,16,17,27],cannot:20,carri:20,categor:[6,8,11,16],categori:[5,27],categorical_accuraci:11,categorical_cross_entropi:10,categorical_embedding_to_encoding_bilstm:5,categorical_embedding_with_hash_bucket:5,categorical_embedding_with_indic:5,categorical_embedding_with_vocabulary_fil:5,categorical_embedding_with_vocabulary_file_and_dropout:5,categorical_indic:5,categorical_indicator_with_vocabulary_fil:[5,6],categorical_indices_from_vocabulary_fil:5,categorical_vari:5,categoricalaccuraci:[8,16],categoricalcrossentropi:[8,16],categoricaldropout:5,caus:20,ccc:6,chang:[17,20],charact:[6,20],charg:20,check:[7,27],checkpoint:[14,27],checkpoint_model:27,choos:20,claim:20,classif:[10,12,16,23],classifi:27,classificationpipelin:[8,16,27],classmethod:[14,15],clean:16,clear:7,clear_dir:7,clear_dir_cont:7,click:[11,27],clip:27,clone:17,code:[16,20],column:[5,7],com:[5,17,18],combin:[5,16,20],come:[11,16,27],command:[16,17,23],comment:20,commerci:20,commit:17,common:[16,20,27],commun:20,compat:14,compil:[14,20,27],compile_keras_model:[14,27],complet:16,complex:[16,27],compli:20,complianc:20,compos:17,comput:[4,5,6,11,20,27],compute_intermediate_stat:27,concat:5,condit:20,config:[4,5,13,27],configur:[5,6,8,9,16,20,27],connect:5,consequenti:20,consid:5,consist:[11,20],conspicu:20,constitut:20,constru:20,constructor:14,contact:16,contain:[4,5,13,14,17,20],content:[1,7,20,23],context:[4,13,27],context_featur:4,continu:16,contract:20,contribut:[16,20],contributor:[16,18,20],contributori:20,control:[16,20,27],convers:20,convert:[5,6,9,13,16],copi:[7,20],copy_from_hdf:7,copy_to_hdf:7,copyright:20,core:[7,13],correspond:[4,5],could:6,counterclaim:20,coupl:27,creat:[4,6,7,12,13,16,17],create_dataset:13,create_dummy_protobuf:4,cross:[10,20],csv:[5,7,13,16,27],csv_file:13,csv_reader:[8,16],current:[7,11,13,14,17,27],custom:[1,5,11,12,14,16,23],customari:20,customiz:[16,24],cycl:[],damag:20,data:[4,5,8,12,14,16,27],data_dir:[13,27],data_format:[13,27],datafram:[7,13,14],dataset:[4,12,13,14,27],date:20,decai:27,deep:16,def_funct:13,default_model_config:27,default_valu:5,defend:20,defin:[4,5,7,9,10,12,13,14,15,16,20,27],define_argu:13,define_featur:4,define_input:4,definit:[4,5,14,20],degrad:27,delet:[7,12],deliber:20,dens:9,depend:17,deploi:16,deploy:[],deriv:20,describ:[20,24],descript:[20,27],design:[16,20,24],dest:7,destin:7,detail:[],determin:20,develop:17,dict:[4,7,9,11,13,14,15],dictionari:[4,5,6,7,9,13,14,27],didn:17,differ:[4,5,14,16,20,27],dimens:5,dir:13,dir_path:7,dir_with_csv:13,direct:20,directli:14,directori:[7,12,13,14,17,27],disclaim:20,discuss:20,disk:7,displai:20,distribut:20,doc:[],docker:16,document:[16,20,27],doe:[5,7,20],domain:[16,27],domain_nam:27,don:[17,20],done:13,down:27,dropout:5,dropout_r:5,dummi:4,dump:7,dure:4,each:[4,5,9,13,14,16,20,24,27],eager:[5,13],earli:[14,27],early_stopping_pati:27,easi:16,easier:20,easili:16,editori:20,either:[5,13,17,20,27],elabor:20,electron:20,element:[6,12,27],embd:5,embed:[5,16],embedding_s:5,enabl:[14,16],enclos:20,encod:[5,6],encoding_s:5,encourag:16,end:[16,20,27],engin:[4,5,9,14],enhanc:27,enter:[],entir:5,entiti:[16,20],entitypredictiondemo:[],entri:5,entropi:10,entrypoint:[],env:17,environ:16,epoch:[14,27],error:17,etc:[16,27],evalu:[4,14,16,27],even:20,event:20,everi:14,everyth:13,exampl:[4,5,6,11,13,16,20,23],examplefeatureconfig:[8,16],except:20,exclud:20,exclus:20,execut:[13,17,20,27],execution_mod:27,executionmodekei:27,exercis:20,exist:7,expand:27,expect:5,experi:[4,12,14],experiennc:27,expertis:16,explicitli:20,exponentialdecai:27,express:20,extens:7,extract:[4,5,13],extract_featur:4,failur:[12,20],fals:[4,7,13,14,27],fast:16,fault:16,fconfig:13,featur:[1,8,9,11,13,14,15,16,27],feature_config:[4,5,9,11,13,14,15,27],feature_config_dict:4,feature_fn:5,feature_info:[4,5,6,13],feature_lay:9,feature_layer_info:[4,5],feature_layer_keys_to_fn:[9,12,14],feature_layer_op:9,feature_list:4,feature_nam:5,feature_tensor:[5,6,13],featureconfig:[5,6,8,9,11,13,14,15,16,23],features_dict:4,features_to_log:4,fed:9,fee:20,fetch:4,field:[5,13,14,20,27],fifti:20,file:[4,5,6,8,12,13,14,16,17,18,20,27],file_handl:27,file_io:[5,6,7,9,13,14,15],file_path:7,filehandl:27,fileio:[5,6,8,9,13,14,15,16],filesystem:7,filter:27,final_activation_op:15,find:27,finish:12,first:[5,12,16],firstli:17,fit:[14,20,24],fix:[4,5],flag:4,float32:6,fns:9,focu:16,focus:16,follow:[4,11,12,16,17,18,20,27],foremost:16,form:[5,7,16,20],format:[13,16,20,27],frame:[7,13],framework:9,free:20,freez:27,freeze_layers_list:[14,27],frequenc:[],frequent:[],from:[4,5,6,7,11,12,13,14,15,16,17,20,27],from_model_config_fil:15,from_relevance_scor:14,from_univariate_interaction_model:14,frozen:27,full:27,further:[9,18,27],gener:[5,20,27],generate_mask:4,get:7,get_all_featur:4,get_config:5,get_context_featur:4,get_default_valu:4,get_dtyp:4,get_featur:4,get_features_to_log:4,get_files_in_directori:7,get_final_activation_op:10,get_group_metrics_kei:4,get_hyperparameter_dict:4,get_inst:4,get_label:4,get_loss_fn:10,get_mask:4,get_metadata_featur:4,get_one_hot_label_vector:6,get_parse_fn:13,get_path_from_str:7,get_query_kei:4,get_rank:4,get_relevance_dataset:12,get_relevance_model:12,get_secondary_label:4,get_sequence_featur:4,get_train_featur:4,get_vocabulary_info:5,getter:4,git:17,github:[5,17,18],gitignor:17,give:20,given:[4,5,27],goal:16,goodwil:20,govern:20,grade:27,gradient:27,gradient_clip_valu:27,grant:20,graph:[4,14],grossli:20,group:[14,27],group_metric_kei:[4,14],group_metrics_kei:4,group_metrics_min_queri:[14,27],groupwis:[4,14,27],groupwise_metr:14,hadoop:7,half:27,handl:[5,6,10,14],handler:[7,27],handshak:16,harmless:20,has:20,hash:5,hash_bucket_s:5,have:[4,9,17,20],hdf:[7,12],help:27,helper:[8,16],henc:4,here:[6,14,16,18],herebi:20,herein:20,high:[16,24],highli:16,hold:20,hook:17,hot:[5,6],how:[14,20,24,27],howev:20,http:[5,17,20,27],hub:16,huge:16,hybrid:16,hyper:4,hyperparamet:4,ideal:13,identif:20,identifi:[4,20,27],ids:5,iii:20,imag:17,implement:14,impli:20,implicitli:4,improv:[20,27],inabl:20,incident:20,includ:[5,20,27],include_label:4,inclus:20,incorpor:20,incur:20,indemn:20,indemnifi:20,index:[5,7],index_col:7,indic:[5,12,20],indir:7,indirect:20,individu:[7,9,14,20],infer:[14,16,23,27],inference_onli:27,inference_signatur:[14,27],infil:7,info:27,inform:[4,5,20],infring:20,ininfer:27,initi:27,initialize_featur:4,initialize_layers_dict:[14,27],input:[4,5,6,7,9,13,14,27],input_lay:[4,9],input_shap:5,input_text:5,insid:[5,17],instal:16,instanc:14,instead:27,institut:20,integ:[5,14],integr:16,intention:20,interact:[8,16],interaction_model:[9,14,15],interactionmodel:[8,14,15,16],interest:16,interfac:20,intermedi:27,irrevoc:20,is_compil:14,issu:[5,18,20],its:[5,16,20],itself:24,jake:18,januari:20,jmannix:18,job:12,job_info:12,job_statu:12,join:13,json:7,json_dict:7,jupyt:[],just:[5,11],jvm:[16,23],keep:[13,16],kei:[4,5,13,14,27],kera:[4,5,9,11,14,27],keyvaluetensoriniti:5,keyword:5,kind:20,kwarg:[5,7,10,11,13],label:[4,6,13,14,27],languag:20,last:10,later:[5,27],law:20,lawsuit:20,layer:[4,5,7,9,10,14,15,16,27],learn:[1,7,14,23],learning_r:27,learning_rate_decai:27,learning_rate_decay_step:27,least:20,left:4,legal:20,lend:24,length:6,liabil:20,liabl:20,librari:16,libsvm:16,licens:16,licensor:20,life:[],like:[7,27],limit:[16,20],line:[16,23],link:20,list:[5,7,11,13,14,20,27],listnet:10,listwis:27,listwise_loss:10,listwiselossbas:10,litig:20,live:5,load:[6,7,13,14,16,27],load_numpy_arrai:7,load_weight:14,loader:[8,16],local:[7,12,27],local_io:7,localio:[8,16],locat:12,log:[4,6,7,12,13,14,15,27],log_initi:4,logger:[4,7,12,13,14,15],logging_frequ:[14,27],logic:[5,14],logs_dir:[14,27],look:[5,13,27],lookup:5,lookup_t:5,lookupt:5,loop:27,loss:[4,8,12,14,15,16,20,27],loss_bas:[10,14,15],loss_kei:[10,27],losskei:27,lot:16,lower:6,ltr:27,made:[20,27],mai:20,mail:20,main:13,maintain:[4,11],make:[4,20],make_directori:7,make_example_parse_fn:13,make_sequence_example_parse_fn:13,malfunct:20,manag:20,mandatori:4,mani:[5,27],mannix:18,map:[5,13,14],mark:20,mask:[4,5,11],match:[4,16],max:[5,6,13,27],max_length:[5,6],max_sequence_s:[4,9,13,14,27],maxim:14,maximum:[5,13,27],mean:[5,11,20],meanrankmetr:11,meanreciprocalrank:[8,16],mechan:20,media:20,medium:20,meet:20,merchant:20,mere:20,merge_mod:5,messag:14,meta:27,metadata:[4,9,12,27],metadata_featur:[4,9,11,15],method:[4,7,12,13,14],metric:[4,8,12,14,16,27],metrickei:27,metrics_dict:14,metrics_impl:11,metrics_kei:27,min:[],minim:14,minimum:[14,27],miss:5,mix:16,ml4ir:[1,4,5,6,7,9,10,11,12,13,14,15,18,23],ml4ir_venv3:17,mode:[5,7,27],model:[4,7,8,10,11,12,15,16,17,27],model_config:[14,15,27],model_config_fil:15,model_fil:[14,27],modelconfig:[16,23],models_dir:[14,27],modif:20,modifi:20,modul:[16,17],modular:[16,24],monitor:[14,27],monitor_metr:[14,27],monitor_mod:[14,27],more:[20,27],most:[16,27],move:13,mrr:[11,27],multipl:27,must:[5,14,20],name:[4,5,7,11,14,16,20,27],namespac:12,narrow:[7,27],natur:[5,6],natural_log:6,necessarili:20,need:[4,14,16],neglig:20,network:[5,9,16],neural:9,new_feature_info:4,node:[4,14,27],non:20,none:[4,5,7,9,13,14,15],nor:5,normal:20,note:[5,7,12,13,14,17,27],notebook:[],noth:20,notic:20,notwithstand:20,now:4,np_arrai:7,num:[],num_bucket:5,num_epoch:[14,27],num_hash_bucket:5,num_oov_bucket:5,num_record:4,number:[4,5,13,14,27],numer:[5,9],numpi:[7,14],object:[4,7,9,10,12,13,14,15,20],oblig:20,obtain:20,offer:20,offlin:16,often:[14,27],one:[5,6,13,16,18,20,27],onli:[4,13,14,17,20,27],onlin:16,oov:5,open:16,oper:[5,9,14],ops:[9,13,14],optim:[4,14,16,27],optimizer_kei:27,optimizer_v2:14,optimizerkei:27,optimizerv2:14,option:[4,5,7,13,14,15,27],order:[4,27],org:[5,20,27],origin:[4,20],other:[14,16,20],otherwis:[7,20],ourselv:16,out:[5,13,16,20],outfil:7,output:[5,7,13,27],output_nam:[10,14,15,27],outstand:20,over:[16,27],overal:[12,14],overrid:[4,12,14,27],overwrit:7,overwritten:7,own:[14,20,27],owner:20,ownership:20,packag:[16,17,27],pad:[4,6,13,14,27],pad_sequ:[13,14],pad_sequence_at_infer:27,page:20,pair:[4,14,27],panda:[7,13],param:12,paramet:[4,5,6,7,9,13,14],pariti:16,pars:[13,14],parse_tfrecord:[12,13],part:[4,13,14,20,27],parti:20,particular:[4,20],pass:[4,7,10,14,27],patent:20,path:[5,7,13,14,17,27],path_exist:7,path_to_output_dir:13,path_to_yaml_feature_config:13,patienc:14,pcent:[],per:[13,14,27],percent:20,percentag:27,perform:[12,13,16,20],permiss:20,perpetu:20,person:27,pertain:20,pickl:7,pip3:17,pip:17,pipelin:[8,13,16,23],place:20,plan:13,pleas:18,plug:[16,27],png:[],point:[5,6,14,17],pointwise_loss:10,pointwiselossbas:10,pointwiserankingdemo:[],popular:[11,16,27],popularity_scor:27,posit:10,possibl:20,post:[14,27],postprocess:14,postprocessing_fn:14,power:20,pre:[14,16,17,27],predefin:27,predict:[4,14,27],prefer:20,prefix:7,prepackag:11,prepar:20,preprocess:[1,6,13,14,16],preprocess_featur:13,preprocess_text:6,preprocessing_info:4,preprocessing_keys_to_fn:[12,13,14],preprocessing_map:13,preprocessingmap:13,present:[4,5,27],pretrain:27,previous_product:27,print:20,problem:16,process:[8,14,16],produc:[6,15],product:[16,20],product_group:27,promin:20,proto:[4,14],protobuf:13,protobuff:4,prototyp:16,provid:[16,20],publicli:20,punctuat:6,purpos:20,pwd:[17,27],pypi:17,pytest:17,python3:[16,17],python:[4,5,7,9,11,13,14,17,27],pythonpath:17,quality_scor:27,queri:[11,13,14,16,23],query2sql:16,query_kei:4,query_text:27,question:18,quick:16,quickli:16,quickstart:16,random:27,random_st:27,rang:5,rank:[4,10,11,12,14,16,23],rankingdataset:14,rankingmodel:[8,12,16],rankingmodelif:27,rankingpipelin:[8,16,27],rankonelistnet:[8,16],rate:[5,27],read:[6,7,13],read_df:7,read_df_list:7,read_json:7,read_text_fil:7,read_yaml:7,readabl:20,reader:[13,14],reason:20,receiv:20,recipi:20,reciproc:11,recognit:16,recommend:[16,20,27],record:[4,10,11,13,14,27],record_text:27,recurs:7,redistribut:20,ref:5,refer:13,regard:20,reinstanti:5,relev:[4,8,13,16,27],relevance_dataset:[12,13,14],relevance_model:[10,12,14],relevance_scor:27,relevancedataset:[8,12,14,16,23],relevancelossbas:[8,14,15,16],relevancemodel:[4,8,10,12,16,27],relevancepipelin:[8,16,27],relevancescor:[8,14,16],reli:27,remain:[20,27],remov:[6,7],remove_punctu:6,replac:[5,20],replic:27,repo:17,repres:[5,6,14,20,27],represent:5,reproduc:20,reproduct:20,requir:[6,10,13,14,16,20,27],required_fields_onli:[13,14],required_onli:[4,27],reset_graph:12,respons:20,result:[5,14,16,17,20,27],resum:27,retain:20,revis:20,riden:16,right:20,risk:20,rm_dir:7,rm_file:7,robust:16,row:[5,27],royalti:20,run:[12,14,16,27],run_group:27,run_id:27,run_not:27,salesforc:[17,18],same:[4,5,16,20,27],sampl:27,save:[7,12,14,16,23,27],save_numpy_arrai:7,savedmodel:[14,27],savez:7,scala:16,scale:5,schedul:27,score:[9,14,15,27],scorer:[8,12,14,16],scorerbas:[8,14,16],scoring_model:[14,15],scoring_typ:10,script:13,search:[7,11,16,27],second:12,secondari:4,secondary_label:4,section:[20,24],see:[6,20],seed:[5,27],select:[4,13,27],sell:20,sent:20,sep:7,separ:[6,7,14,20],sequenc:[4,6,8,13,14,16,27],sequence_exampl:13,sequence_featur:4,sequenceexampl:[4,13,14],sequenceexamplefeatureconfig:[8,16],serial:13,serializ:[5,14],serv:[14,16,27],servic:20,serving_default:[14,27],set:[4,5,13,14,17,27],set_featur:4,set_logg:7,set_se:12,setter:4,setup_log:12,setuptool:17,sever:13,shall:20,share:20,shift:6,should:[5,7,13,14,20,27],sigmoid:10,sigmoidcrossentropi:[8,16],sign:6,signatur:[14,27],similar:5,singl:[9,13,14,16],size:[5,13,27],slot:5,slow:27,softmax:10,softwar:20,sole:20,solr:16,solut:16,someon:16,sourc:[7,16,17,20],space:16,space_separated_paths_to_csv_fil:13,spark:[7,12],spark_io:7,sparkio:[8,16],spec:13,special:20,specif:[5,6,17,20],specifi:[4,5,7,13,14,27],spin:[],split:[6,13,27],split_and_pad_str:6,split_char:6,src:7,srinivasa:18,stacktrac:12,standalon:13,starter:[],stat:27,state:[5,11,20,27],statement:20,statu:[12,14],step:[13,14,27],still:27,stop:[14,27],stoppag:20,store:[4,13,16],str:[4,5,7,9,12,13,14,15,27],string:[5,6,7,27],structur:[7,16],subcompon:[16,23],subdirectori:27,subject:20,sublicens:20,submiss:20,submit:20,subpackag:[],subsequ:20,substructur:4,suit:12,sum:5,supersed:20,support:[7,11,20,27],sure:4,symbol:[5,9],syntax:[13,20],system:[7,20],tabl:5,tackl:16,task:[16,27],tell:4,temp:12,tensor:[5,6,9,14],tensorflow:[4,5,9,11,13,14,16,27],term:20,termin:20,test:[5,13,16,27],test_dataset:14,test_pcent_split:[13,27],text:[7,20,27],tfrecord:[4,13,14,16,27],tfrecord_dir:13,tfrecord_fil:13,tfrecord_read:[8,16],tfrecord_typ:[4,9,13,14,27],tfrecord_writ:[8,16],tfrecorddataset:13,tfrecorddatasetv2:[13,14],tfrecordtypekei:13,thei:[4,17],them:[9,27],theori:20,therebi:5,thereof:20,thi:[4,5,12,13,14,16,17,20,24,27],third:20,those:20,threshold:27,through:[5,16,20],tight:16,time:[5,12,14,27],titl:20,tmp:13,to_low:6,todai:27,togeth:24,token:6,toler:16,toolkit:[16,23],top:16,tort:20,track:[4,12,14,20],trade:20,trademark:20,train:[4,5,9,12,13,14,16,17,27],train_featur:[4,9,15],train_inference_evalu:27,train_pcent_split:[13,27],train_val_test_split:13,trainabl:9,transfer:[1,7,12,14,16,20],transform:[1,8,9,15,16,20],transform_features_op:9,translat:20,tupl:[5,12],two:[5,14],txt:17,type:[5,6,9,14,16,20,27],under:[5,17,20,27],understand:[16,23],union:[14,20],uniqu:[5,27],unit:17,univari:9,univariateinteractionmodel:[8,14,16],unless:20,unstructur:16,unwrap:4,unzip:7,updat:4,upgrad:17,usag:[4,16,23],use:[4,7,12,13,14,16,17,20,27],use_all_fields_at_infer:27,use_part_fil:[13,27],used:[4,5,6,7,9,10,11,14,16,27],user:[4,5,16,27],uses:[5,16],using:[5,12,13,14,16,17,20,27],usual:27,util:[8,16],utilti:16,val:27,val_pcent_split:[13,27],valid:[13,14,27],validate_arg:12,valu:[4,5,6,13,14,27],variabl:17,varieti:16,venv:17,verbal:20,version:[17,20],virtual:16,virtualenv:17,vocablookup:5,vocabulari:[5,6],vocabulary_fil:5,vocabulary_id:5,vocabulary_kei:5,vocabulary_list:5,wai:16,wait:27,walk:[],walkthrough:[],want:[4,14,16,27],warranti:20,weight:[5,7,27],were:4,when:[5,7],where:[5,13,14,20],wherea:27,wherev:20,whether:[5,6,7,13,14,20,27],which:[5,16,20],whole:[5,20],whom:20,whose:4,wide:16,wise:6,within:20,without:[5,14,17,20],word:5,work:[5,16,17,20],worldwid:20,worri:17,wrap:12,wrapper:[5,7,11,14],write:[7,13,20],write_df:7,write_from_df:13,write_from_fil:13,write_json:7,written:[7,20],www:[5,20,27],y_pred:11,y_true:11,yaml:[4,7,13,27],yml:17,you:[14,16,17,20,27],your:[14,16,17,20,27],yyyi:20,zip:[7,14]},titles:["Using custom feature transformation functions","Advanced Guide","Using custom preprocessing functions","Transfer Learning with ml4ir","Feature Configuration","Feature Transformation","Feature Processing","File I/O Utilities","API Documentation","Interaction Model","Losses","Metrics","Pipelines","Data Loaders and Helpers","Relevance Models","Scorer","ml4ir - Machine Learning for Information Retrieval","Installation","Contact Us","&lt;no title&gt;","License","RelevanceDataset","FeatureConfig","Quickstart","Understanding ml4ir\u2019s subcomponent architecture","ModelConfig","Saving","Using ml4ir as a toolkit","JVM Inference"],titleterms:{"function":[0,2],Using:[0,2,17,27],acr:[],advanc:1,api:8,architectur:24,argument:27,ask:[],averageclickrank:11,build:[],callback:[],categor:5,categoricalaccuraci:11,categoricalcrossentropi:10,classif:27,classificationpipelin:12,clone:[],command:27,configur:4,contact:18,content:[8,16,27],contribut:17,csv_reader:13,custom:[0,2,27],data:13,doc:[],docker:17,document:8,environ:17,exampl:27,examplefeatureconfig:4,featur:[0,4,5,6],featureconfig:[4,22],file:7,fileio:7,firstli:[],frequent:[],guid:[1,16],helper:13,how:[],indic:[],infer:28,inform:16,instal:17,interact:9,interactionmodel:9,jvm:28,learn:[3,16,27],librari:17,licens:20,line:27,loader:13,localio:7,loss:10,machin:16,meanreciprocalrank:11,metric:11,ml4ir:[3,16,17,24,27],model:[9,14],modelconfig:25,modul:[],motiv:16,mrr:[],packag:[],pipelin:[12,27],preprocess:2,principl:16,process:6,python:[],queri:27,question:[],quick:[],quickstart:23,rank:27,rankingmodel:14,rankingpipelin:12,rankonelistnet:10,recommend:17,relev:14,relevancedataset:[13,21],relevancelossbas:10,relevancemodel:14,relevancepipelin:12,relevancescor:15,requir:17,retriev:16,run:17,save:26,scorer:15,scorerbas:15,script:[],sequenc:5,sequenceexamplefeatureconfig:4,sigmoidcrossentropi:10,sparkio:7,start:[],subcompon:24,subpackag:[],tabl:[],test:17,tfrecord_read:13,tfrecord_writ:13,toolkit:[17,27],transfer:3,transform:[0,5],understand:24,univariateinteractionmodel:9,usag:27,util:7,virtual:17,welcom:[]}})