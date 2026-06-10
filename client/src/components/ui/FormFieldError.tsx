
i
m
p
o
r
t
 
R
e
a
c
t
 
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
 
F
o
r
m
F
i
e
l
d
E
r
r
o
r
P
r
o
p
s
 
{


 
 
e
r
r
o
r
?
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
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


 
 
i
d
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




/
*
*


 
*
 
F
o
r
m
F
i
e
l
d
E
r
r
o
r
 
-
 
R
e
u
s
a
b
l
e
 
c
o
m
p
o
n
e
n
t
 
f
o
r
 
d
i
s
p
l
a
y
i
n
g
 
f
i
e
l
d
-
l
e
v
e
l
 
v
a
l
i
d
a
t
i
o
n
 
e
r
r
o
r
s


 
*


 
*
 
T
h
i
s
 
c
o
m
p
o
n
e
n
t
 
p
r
o
v
i
d
e
s
 
a
 
c
o
n
s
i
s
t
e
n
t
 
w
a
y
 
t
o
 
d
i
s
p
l
a
y
 
v
a
l
i
d
a
t
i
o
n
 
e
r
r
o
r
s
 
a
c
r
o
s
s
 
a
l
l
 
f
o
r
m
s
.


 
*
 
I
t
 
h
a
n
d
l
e
s
:


 
*
 
-
 
C
o
n
d
i
t
i
o
n
a
l
 
r
e
n
d
e
r
i
n
g
 
(
o
n
l
y
 
s
h
o
w
s
 
i
f
 
e
r
r
o
r
 
e
x
i
s
t
s
)


 
*
 
-
 
C
o
n
s
i
s
t
e
n
t
 
s
t
y
l
i
n
g
 
w
i
t
h
 
T
a
i
l
w
i
n
d


 
*
 
-
 
A
c
c
e
s
s
i
b
i
l
i
t
y
 
w
i
t
h
 
p
r
o
p
e
r
 
A
R
I
A
 
a
t
t
r
i
b
u
t
e
s
 
(
r
o
l
e
=
"
a
l
e
r
t
"
,
 
i
d
 
f
o
r
 
a
r
i
a
-
d
e
s
c
r
i
b
e
d
b
y
)


 
*
 
-
 
S
m
o
o
t
h
 
t
r
a
n
s
i
t
i
o
n
s
 
f
o
r
 
b
e
t
t
e
r
 
U
X


 
*


 
*
 
U
s
a
g
e
:


 
*
 
`
`
`
t
s
x


 
*
 
<
F
o
r
m
F
i
e
l
d
E
r
r
o
r
 
e
r
r
o
r
=
{
e
r
r
o
r
s
.
e
m
a
i
l
}
 
i
d
=
"
e
m
a
i
l
-
e
r
r
o
r
"
 
/
>


 
*
 
`
`
`


 
*
/


e
x
p
o
r
t
 
c
o
n
s
t
 
F
o
r
m
F
i
e
l
d
E
r
r
o
r
 
=
 
R
e
a
c
t
.
m
e
m
o
(
f
u
n
c
t
i
o
n
 
F
o
r
m
F
i
e
l
d
E
r
r
o
r
(
{


 
 
e
r
r
o
r
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
,


 
 
i
d
,


}
:
 
F
o
r
m
F
i
e
l
d
E
r
r
o
r
P
r
o
p
s
)
 
{


 
 
i
f
 
(
!
e
r
r
o
r
)
 
r
e
t
u
r
n
 
n
u
l
l
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v


 
 
 
 
 
 
r
o
l
e
=
"
a
l
e
r
t
"


 
 
 
 
 
 
i
d
=
{
i
d
}


 
 
 
 
 
 
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
`
m
t
-
1
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
r
e
d
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
r
e
d
-
4
0
0
 
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
}
`
}


 
 
 
 
>


 
 
 
 
 
 
{
e
r
r
o
r
}


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}
)
;




F
o
r
m
F
i
e
l
d
E
r
r
o
r
.
d
i
s
p
l
a
y
N
a
m
e
 
=
 
"
F
o
r
m
F
i
e
l
d
E
r
r
o
r
"
;


