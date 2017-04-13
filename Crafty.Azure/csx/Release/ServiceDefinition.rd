<?xml version="1.0" encoding="utf-8"?>
<serviceModel xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" name="Crafty.Azure" generation="1" functional="0" release="0" Id="3cd08570-41ca-4901-bb5d-abf19e995d18" dslVersion="1.2.0.0" xmlns="http://schemas.microsoft.com/dsltools/RDSM">
  <groups>
    <group name="Crafty.AzureGroup" generation="1" functional="0" release="0">
      <componentports>
        <inPort name="Crafty:Endpoint1" protocol="http">
          <inToChannel>
            <lBChannelMoniker name="/Crafty.Azure/Crafty.AzureGroup/LB:Crafty:Endpoint1" />
          </inToChannel>
        </inPort>
      </componentports>
      <settings>
        <aCS name="Crafty:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="">
          <maps>
            <mapMoniker name="/Crafty.Azure/Crafty.AzureGroup/MapCrafty:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </maps>
        </aCS>
        <aCS name="CraftyInstances" defaultValue="[1,1,1]">
          <maps>
            <mapMoniker name="/Crafty.Azure/Crafty.AzureGroup/MapCraftyInstances" />
          </maps>
        </aCS>
      </settings>
      <channels>
        <lBChannel name="LB:Crafty:Endpoint1">
          <toPorts>
            <inPortMoniker name="/Crafty.Azure/Crafty.AzureGroup/Crafty/Endpoint1" />
          </toPorts>
        </lBChannel>
      </channels>
      <maps>
        <map name="MapCrafty:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" kind="Identity">
          <setting>
            <aCSMoniker name="/Crafty.Azure/Crafty.AzureGroup/Crafty/Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </setting>
        </map>
        <map name="MapCraftyInstances" kind="Identity">
          <setting>
            <sCSPolicyIDMoniker name="/Crafty.Azure/Crafty.AzureGroup/CraftyInstances" />
          </setting>
        </map>
      </maps>
      <components>
        <groupHascomponents>
          <role name="Crafty" generation="1" functional="0" release="0" software="c:\Users\Jamie\documents\visual studio 2013\Projects\Crafty\Crafty.Azure\csx\Release\roles\Crafty" entryPoint="base\x64\WaHostBootstrapper.exe" parameters="base\x64\WaIISHost.exe " memIndex="1792" hostingEnvironment="frontendadmin" hostingEnvironmentVersion="2">
            <componentports>
              <inPort name="Endpoint1" protocol="http" portRanges="80" />
            </componentports>
            <settings>
              <aCS name="Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="" />
              <aCS name="__ModelData" defaultValue="&lt;m role=&quot;Crafty&quot; xmlns=&quot;urn:azure:m:v1&quot;&gt;&lt;r name=&quot;Crafty&quot;&gt;&lt;e name=&quot;Endpoint1&quot; /&gt;&lt;/r&gt;&lt;/m&gt;" />
            </settings>
            <resourcereferences>
              <resourceReference name="DiagnosticStore" defaultAmount="[4096,4096,4096]" defaultSticky="true" kind="Directory" />
              <resourceReference name="EventStore" defaultAmount="[1000,1000,1000]" defaultSticky="false" kind="LogStore" />
            </resourcereferences>
          </role>
          <sCSPolicy>
            <sCSPolicyIDMoniker name="/Crafty.Azure/Crafty.AzureGroup/CraftyInstances" />
            <sCSPolicyUpdateDomainMoniker name="/Crafty.Azure/Crafty.AzureGroup/CraftyUpgradeDomains" />
            <sCSPolicyFaultDomainMoniker name="/Crafty.Azure/Crafty.AzureGroup/CraftyFaultDomains" />
          </sCSPolicy>
        </groupHascomponents>
      </components>
      <sCSPolicy>
        <sCSPolicyUpdateDomain name="CraftyUpgradeDomains" defaultPolicy="[5,5,5]" />
        <sCSPolicyFaultDomain name="CraftyFaultDomains" defaultPolicy="[2,2,2]" />
        <sCSPolicyID name="CraftyInstances" defaultPolicy="[1,1,1]" />
      </sCSPolicy>
    </group>
  </groups>
  <implements>
    <implementation Id="8625ad08-2c84-4a87-a652-3ac86189451d" ref="Microsoft.RedDog.Contract\ServiceContract\Crafty.AzureContract@ServiceDefinition">
      <interfacereferences>
        <interfaceReference Id="e6f9b9e9-61f4-42cc-a6fc-c1790214adf8" ref="Microsoft.RedDog.Contract\Interface\Crafty:Endpoint1@ServiceDefinition">
          <inPort>
            <inPortMoniker name="/Crafty.Azure/Crafty.AzureGroup/Crafty:Endpoint1" />
          </inPort>
        </interfaceReference>
      </interfacereferences>
    </implementation>
  </implements>
</serviceModel>