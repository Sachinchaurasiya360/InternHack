
i
m
p
o
r
t
 
t
y
p
e
 
{
 
R
e
a
c
t
N
o
d
e
 
}
 
f
r
o
m
 
"
r
e
a
c
t
"
;




i
n
t
e
r
f
a
c
e
 
M
e
t
a
C
h
i
p
P
r
o
p
s
 
{


 
 
c
h
i
l
d
r
e
n
:
 
R
e
a
c
t
N
o
d
e
;


 
 
i
c
o
n
?
:
 
R
e
a
c
t
N
o
d
e
;


 
 
c
l
a
s
s
N
a
m
e
?
:
 
s
t
r
i
n
g
;


}




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
M
e
t
a
C
h
i
p
(
{
 
c
h
i
l
d
r
e
n
,
 
i
c
o
n
,
 
c
l
a
s
s
N
a
m
e
 
=
 
"
"
 
}
:
 
M
e
t
a
C
h
i
p
P
r
o
p
s
)
 
{


 
 
c
o
n
s
t
 
d
e
f
a
u
l
t
C
o
l
o
r
s
 
=
 
"
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
"
;


 
 


 
 
c
o
n
s
t
 
f
i
n
a
l
C
l
a
s
s
 
=
 
`
i
n
l
i
n
e
-
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
.
5
 
p
x
-
2
.
5
 
p
y
-
0
.
5
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
r
 
b
o
r
d
e
r
 
r
o
u
n
d
e
d
-
m
d
 
$
{


 
 
 
 
c
l
a
s
s
N
a
m
e
 
|
|
 
d
e
f
a
u
l
t
C
o
l
o
r
s


 
 
}
`
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
{
f
i
n
a
l
C
l
a
s
s
}
>


 
 
 
 
 
 
{
i
c
o
n
 
&
&
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
s
h
r
i
n
k
-
0
"
>
{
i
c
o
n
}
<
/
s
p
a
n
>
}


 
 
 
 
 
 
{
c
h
i
l
d
r
e
n
}


 
 
 
 
<
/
s
p
a
n
>


 
 
)
;


}


