
i
m
p
o
r
t
 
{
 
u
s
e
R
e
f
,
 
u
s
e
S
t
a
t
e
,
 
u
s
e
C
a
l
l
b
a
c
k
,
 
u
s
e
E
f
f
e
c
t
 
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
 
F
a
c
e
V
i
o
l
a
t
i
o
n
 
}
 
f
r
o
m
 
"
.
/
u
s
e
P
r
o
c
t
o
r
i
n
g
"
;




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
C
o
n
f
i
g
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


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
a
c
e
D
e
t
e
c
t
i
o
n
C
o
n
f
i
g
 
{


 
 
d
e
t
e
c
t
i
o
n
I
n
t
e
r
v
a
l
M
s
?
:
 
n
u
m
b
e
r
;
 
 
 
/
/
 
d
e
f
a
u
l
t
 
1
0
0
0


 
 
c
o
n
s
e
c
u
t
i
v
e
T
h
r
e
s
h
o
l
d
?
:
 
n
u
m
b
e
r
;
 
 
/
/
 
f
r
a
m
e
s
 
b
e
f
o
r
e
 
r
e
p
o
r
t
i
n
g
 
(
d
e
f
a
u
l
t
 
3
)


 
 
s
n
a
p
s
h
o
t
I
n
t
e
r
v
a
l
M
s
?
:
 
n
u
m
b
e
r
;
 
 
 
 
/
/
 
d
e
f
a
u
l
t
 
6
0
0
0
0


 
 
o
n
V
i
o
l
a
t
i
o
n
:
 
(
v
:
 
F
a
c
e
V
i
o
l
a
t
i
o
n
)
 
=
>
 
v
o
i
d
;


 
 
o
n
S
n
a
p
s
h
o
t
:
 
(
)
 
=
>
 
v
o
i
d
;


 
 
o
n
R
e
a
d
y
:
 
(
)
 
=
>
 
v
o
i
d
;


 
 
o
n
E
r
r
o
r
:
 
(
e
r
r
:
 
s
t
r
i
n
g
)
 
=
>
 
v
o
i
d
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
H
o
o
k
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


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
 
u
s
e
F
a
c
e
D
e
t
e
c
t
i
o
n
(
c
o
n
f
i
g
:
 
F
a
c
e
D
e
t
e
c
t
i
o
n
C
o
n
f
i
g
)
 
{


 
 
c
o
n
s
t
 
{


 
 
 
 
d
e
t
e
c
t
i
o
n
I
n
t
e
r
v
a
l
M
s
 
=
 
1
0
0
0
,


 
 
 
 
c
o
n
s
e
c
u
t
i
v
e
T
h
r
e
s
h
o
l
d
 
=
 
3
,


 
 
 
 
s
n
a
p
s
h
o
t
I
n
t
e
r
v
a
l
M
s
 
=
 
6
0
0
0
0
,


 
 
 
 
o
n
V
i
o
l
a
t
i
o
n
,


 
 
 
 
o
n
S
n
a
p
s
h
o
t
,


 
 
 
 
o
n
R
e
a
d
y
,


 
 
 
 
o
n
E
r
r
o
r
,


 
 
}
 
=
 
c
o
n
f
i
g
;




 
 
c
o
n
s
t
 
v
i
d
e
o
R
e
f
 
=
 
u
s
e
R
e
f
<
H
T
M
L
V
i
d
e
o
E
l
e
m
e
n
t
 
|
 
n
u
l
l
>
(
n
u
l
l
)
;


 
 
c
o
n
s
t
 
d
e
t
e
c
t
o
r
R
e
f
 
=
 
u
s
e
R
e
f
<
{
 
d
e
t
e
c
t
F
o
r
V
i
d
e
o
:
 
(
v
i
d
e
o
:
 
H
T
M
L
V
i
d
e
o
E
l
e
m
e
n
t
,
 
t
s
:
 
n
u
m
b
e
r
)
 
=
>
 
{
 
d
e
t
e
c
t
i
o
n
s
:
 
u
n
k
n
o
w
n
[
]
 
}
;
 
c
l
o
s
e
:
 
(
)
 
=
>
 
v
o
i
d
 
}
 
|
 
n
u
l
l
>
(
n
u
l
l
)
;


 
 
c
o
n
s
t
 
s
t
r
e
a
m
R
e
f
 
=
 
u
s
e
R
e
f
<
M
e
d
i
a
S
t
r
e
a
m
 
|
 
n
u
l
l
>
(
n
u
l
l
)
;


 
 
c
o
n
s
t
 
d
e
t
e
c
t
i
o
n
T
i
m
e
r
R
e
f
 
=
 
u
s
e
R
e
f
<
R
e
t
u
r
n
T
y
p
e
<
t
y
p
e
o
f
 
s
e
t
I
n
t
e
r
v
a
l
>
 
|
 
n
u
l
l
>
(
n
u
l
l
)
;


 
 
c
o
n
s
t
 
s
n
a
p
s
h
o
t
T
i
m
e
r
R
e
f
 
=
 
u
s
e
R
e
f
<
R
e
t
u
r
n
T
y
p
e
<
t
y
p
e
o
f
 
s
e
t
I
n
t
e
r
v
a
l
>
 
|
 
n
u
l
l
>
(
n
u
l
l
)
;


 
 
c
o
n
s
t
 
c
o
n
s
e
c
u
t
i
v
e
N
o
F
a
c
e
R
e
f
 
=
 
u
s
e
R
e
f
(
0
)
;


 
 
c
o
n
s
t
 
c
o
n
s
e
c
u
t
i
v
e
M
u
l
t
i
F
a
c
e
R
e
f
 
=
 
u
s
e
R
e
f
(
0
)
;




 
 
/
/
 
S
t
a
b
l
e
 
r
e
f
s
 
f
o
r
 
c
a
l
l
b
a
c
k
s


 
 
c
o
n
s
t
 
o
n
V
i
o
l
a
t
i
o
n
R
e
f
 
=
 
u
s
e
R
e
f
(
o
n
V
i
o
l
a
t
i
o
n
)
;


 
 
c
o
n
s
t
 
o
n
S
n
a
p
s
h
o
t
R
e
f
 
=
 
u
s
e
R
e
f
(
o
n
S
n
a
p
s
h
o
t
)
;


 
 
c
o
n
s
t
 
o
n
R
e
a
d
y
R
e
f
 
=
 
u
s
e
R
e
f
(
o
n
R
e
a
d
y
)
;


 
 
c
o
n
s
t
 
o
n
E
r
r
o
r
R
e
f
 
=
 
u
s
e
R
e
f
(
o
n
E
r
r
o
r
)
;




 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
o
n
V
i
o
l
a
t
i
o
n
R
e
f
.
c
u
r
r
e
n
t
 
=
 
o
n
V
i
o
l
a
t
i
o
n
;


 
 
 
 
o
n
S
n
a
p
s
h
o
t
R
e
f
.
c
u
r
r
e
n
t
 
=
 
o
n
S
n
a
p
s
h
o
t
;


 
 
 
 
o
n
R
e
a
d
y
R
e
f
.
c
u
r
r
e
n
t
 
=
 
o
n
R
e
a
d
y
;


 
 
 
 
o
n
E
r
r
o
r
R
e
f
.
c
u
r
r
e
n
t
 
=
 
o
n
E
r
r
o
r
;


 
 
}
,
 
[
o
n
V
i
o
l
a
t
i
o
n
,
 
o
n
S
n
a
p
s
h
o
t
,
 
o
n
R
e
a
d
y
,
 
o
n
E
r
r
o
r
]
)
;


 
 
c
o
n
s
t
 
[
i
s
L
o
a
d
i
n
g
,
 
s
e
t
I
s
L
o
a
d
i
n
g
]
 
=
 
u
s
e
S
t
a
t
e
(
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
[
i
s
A
c
t
i
v
e
,
 
s
e
t
I
s
A
c
t
i
v
e
]
 
=
 
u
s
e
S
t
a
t
e
(
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
[
e
r
r
o
r
,
 
s
e
t
E
r
r
o
r
]
 
=
 
u
s
e
S
t
a
t
e
<
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
>
(
n
u
l
l
)
;


 
 
c
o
n
s
t
 
[
c
u
r
r
e
n
t
F
a
c
e
C
o
u
n
t
,
 
s
e
t
C
u
r
r
e
n
t
F
a
c
e
C
o
u
n
t
]
 
=
 
u
s
e
S
t
a
t
e
(
0
)
;




 
 
/
*
 
-
-
-
-
 
S
t
a
r
t
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


 
 
c
o
n
s
t
 
s
t
a
r
t
 
=
 
u
s
e
C
a
l
l
b
a
c
k
(
a
s
y
n
c
 
(
)
 
=
>
 
{


 
 
 
 
s
e
t
I
s
L
o
a
d
i
n
g
(
t
r
u
e
)
;


 
 
 
 
s
e
t
E
r
r
o
r
(
n
u
l
l
)
;




 
 
 
 
/
/
 
1
.
 
R
e
q
u
e
s
t
 
c
a
m
e
r
a


 
 
 
 
l
e
t
 
s
t
r
e
a
m
:
 
M
e
d
i
a
S
t
r
e
a
m
;


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
s
t
r
e
a
m
 
=
 
a
w
a
i
t
 
n
a
v
i
g
a
t
o
r
.
m
e
d
i
a
D
e
v
i
c
e
s
.
g
e
t
U
s
e
r
M
e
d
i
a
(
{


 
 
 
 
 
 
 
 
v
i
d
e
o
:
 
{
 
w
i
d
t
h
:
 
3
2
0
,
 
h
e
i
g
h
t
:
 
2
4
0
,
 
f
a
c
i
n
g
M
o
d
e
:
 
"
u
s
e
r
"
 
}
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
s
t
r
e
a
m
R
e
f
.
c
u
r
r
e
n
t
 
=
 
s
t
r
e
a
m
;


 
 
 
 
}
 
c
a
t
c
h
 
(
e
r
r
:
 
u
n
k
n
o
w
n
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
e
 
=
 
e
r
r
 
a
s
 
{
 
n
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
 
m
e
s
s
a
g
e
?
:
 
s
t
r
i
n
g
 
}
;


 
 
 
 
 
 
l
e
t
 
m
s
g
:
 
s
t
r
i
n
g
;


 
 
 
 
 
 
i
f
 
(
e
?
.
n
a
m
e
 
=
=
=
 
"
N
o
t
A
l
l
o
w
e
d
E
r
r
o
r
"
)
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
P
o
l
i
c
y
 
=


 
 
 
 
 
 
 
 
 
 
e
?
.
m
e
s
s
a
g
e
?
.
t
o
L
o
w
e
r
C
a
s
e
(
)
.
i
n
c
l
u
d
e
s
(
"
p
e
r
m
i
s
s
i
o
n
s
 
p
o
l
i
c
y
"
)
 
|
|


 
 
 
 
 
 
 
 
 
 
e
?
.
m
e
s
s
a
g
e
?
.
t
o
L
o
w
e
r
C
a
s
e
(
)
.
i
n
c
l
u
d
e
s
(
"
f
e
a
t
u
r
e
 
p
o
l
i
c
y
"
)
;


 
 
 
 
 
 
 
 
m
s
g
 
=
 
i
s
P
o
l
i
c
y


 
 
 
 
 
 
 
 
 
 
?
 
"
C
a
m
e
r
a
 
b
l
o
c
k
e
d
 
b
y
 
s
i
t
e
 
s
e
c
u
r
i
t
y
 
p
o
l
i
c
y
.
 
P
l
e
a
s
e
 
c
o
n
t
a
c
t
 
s
u
p
p
o
r
t
.
"


 
 
 
 
 
 
 
 
 
 
:
 
"
C
a
m
e
r
a
 
p
e
r
m
i
s
s
i
o
n
 
d
e
n
i
e
d
.
 
P
l
e
a
s
e
 
a
l
l
o
w
 
c
a
m
e
r
a
 
a
c
c
e
s
s
 
i
n
 
y
o
u
r
 
b
r
o
w
s
e
r
 
s
e
t
t
i
n
g
s
 
a
n
d
 
t
r
y
 
a
g
a
i
n
.
"
;


 
 
 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
e
?
.
n
a
m
e
 
=
=
=
 
"
N
o
t
F
o
u
n
d
E
r
r
o
r
"
)
 
{


 
 
 
 
 
 
 
 
m
s
g
 
=
 
"
N
o
 
c
a
m
e
r
a
 
f
o
u
n
d
.
 
P
l
e
a
s
e
 
c
o
n
n
e
c
t
 
a
 
c
a
m
e
r
a
 
a
n
d
 
t
r
y
 
a
g
a
i
n
.
"
;


 
 
 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
e
?
.
n
a
m
e
 
=
=
=
 
"
N
o
t
R
e
a
d
a
b
l
e
E
r
r
o
r
"
)
 
{


 
 
 
 
 
 
 
 
m
s
g
 
=
 
"
C
a
m
e
r
a
 
i
s
 
i
n
 
u
s
e
 
b
y
 
a
n
o
t
h
e
r
 
a
p
p
l
i
c
a
t
i
o
n
.
 
P
l
e
a
s
e
 
c
l
o
s
e
 
i
t
 
a
n
d
 
t
r
y
 
a
g
a
i
n
.
"
;


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
m
s
g
 
=
 
"
C
a
m
e
r
a
 
n
o
t
 
a
v
a
i
l
a
b
l
e
.
 
P
l
e
a
s
e
 
c
h
e
c
k
 
y
o
u
r
 
d
e
v
i
c
e
 
a
n
d
 
t
r
y
 
a
g
a
i
n
.
"
;


 
 
 
 
 
 
}


 
 
 
 
 
 
s
e
t
E
r
r
o
r
(
m
s
g
)
;


 
 
 
 
 
 
s
e
t
I
s
L
o
a
d
i
n
g
(
f
a
l
s
e
)
;


 
 
 
 
 
 
o
n
E
r
r
o
r
R
e
f
.
c
u
r
r
e
n
t
(
m
s
g
)
;


 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
}




 
 
 
 
/
/
 
A
t
t
a
c
h
 
t
o
 
v
i
d
e
o
 
e
l
e
m
e
n
t


 
 
 
 
i
f
 
(
v
i
d
e
o
R
e
f
.
c
u
r
r
e
n
t
)
 
{


 
 
 
 
 
 
v
i
d
e
o
R
e
f
.
c
u
r
r
e
n
t
.
s
r
c
O
b
j
e
c
t
 
=
 
s
t
r
e
a
m
;


 
 
 
 
 
 
a
w
a
i
t
 
v
i
d
e
o
R
e
f
.
c
u
r
r
e
n
t
.
p
l
a
y
(
)
.
c
a
t
c
h
(
(
)
 
=
>
 
{
}
)
;


 
 
 
 
}




 
 
 
 
/
/
 
2
.
 
L
o
a
d
 
M
e
d
i
a
P
i
p
e
 
F
a
c
e
 
D
e
t
e
c
t
o
r


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
c
o
n
s
t
 
{
 
F
a
c
e
D
e
t
e
c
t
o
r
,
 
F
i
l
e
s
e
t
R
e
s
o
l
v
e
r
 
}
 
=
 
a
w
a
i
t
 
i
m
p
o
r
t
(
"
@
m
e
d
i
a
p
i
p
e
/
t
a
s
k
s
-
v
i
s
i
o
n
"
)
;


 
 
 
 
 
 
c
o
n
s
t
 
v
i
s
i
o
n
 
=
 
a
w
a
i
t
 
F
i
l
e
s
e
t
R
e
s
o
l
v
e
r
.
f
o
r
V
i
s
i
o
n
T
a
s
k
s
(


 
 
 
 
 
 
 
 
"
h
t
t
p
s
:
/
/
c
d
n
.
j
s
d
e
l
i
v
r
.
n
e
t
/
n
p
m
/
@
m
e
d
i
a
p
i
p
e
/
t
a
s
k
s
-
v
i
s
i
o
n
@
l
a
t
e
s
t
/
w
a
s
m
"


 
 
 
 
 
 
)
;


 
 
 
 
 
 
d
e
t
e
c
t
o
r
R
e
f
.
c
u
r
r
e
n
t
 
=
 
a
w
a
i
t
 
F
a
c
e
D
e
t
e
c
t
o
r
.
c
r
e
a
t
e
F
r
o
m
O
p
t
i
o
n
s
(
v
i
s
i
o
n
,
 
{


 
 
 
 
 
 
 
 
b
a
s
e
O
p
t
i
o
n
s
:
 
{


 
 
 
 
 
 
 
 
 
 
m
o
d
e
l
A
s
s
e
t
P
a
t
h
:


 
 
 
 
 
 
 
 
 
 
 
 
"
h
t
t
p
s
:
/
/
s
t
o
r
a
g
e
.
g
o
o
g
l
e
a
p
i
s
.
c
o
m
/
m
e
d
i
a
p
i
p
e
-
m
o
d
e
l
s
/
f
a
c
e
_
d
e
t
e
c
t
o
r
/
b
l
a
z
e
_
f
a
c
e
_
s
h
o
r
t
_
r
a
n
g
e
/
f
l
o
a
t
1
6
/
1
/
b
l
a
z
e
_
f
a
c
e
_
s
h
o
r
t
_
r
a
n
g
e
.
t
f
l
i
t
e
"
,


 
 
 
 
 
 
 
 
 
 
d
e
l
e
g
a
t
e
:
 
"
G
P
U
"
,


 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
r
u
n
n
i
n
g
M
o
d
e
:
 
"
V
I
D
E
O
"
,


 
 
 
 
 
 
 
 
m
i
n
D
e
t
e
c
t
i
o
n
C
o
n
f
i
d
e
n
c
e
:
 
0
.
5
,


 
 
 
 
 
 
}
)
;


 
 
 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
 
 
/
/
 
M
e
d
i
a
P
i
p
e
 
f
a
i
l
e
d
 
-
 
c
a
m
e
r
a
 
s
t
i
l
l
 
w
o
r
k
s
 
a
s
 
d
e
t
e
r
r
e
n
t


 
 
 
 
 
 
s
e
t
I
s
L
o
a
d
i
n
g
(
f
a
l
s
e
)
;


 
 
 
 
 
 
s
e
t
I
s
A
c
t
i
v
e
(
t
r
u
e
)
;


 
 
 
 
 
 
o
n
R
e
a
d
y
R
e
f
.
c
u
r
r
e
n
t
(
)
;


 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
}




 
 
 
 
s
e
t
I
s
L
o
a
d
i
n
g
(
f
a
l
s
e
)
;


 
 
 
 
s
e
t
I
s
A
c
t
i
v
e
(
t
r
u
e
)
;


 
 
 
 
o
n
R
e
a
d
y
R
e
f
.
c
u
r
r
e
n
t
(
)
;




 
 
 
 
/
/
 
3
.
 
S
t
a
r
t
 
d
e
t
e
c
t
i
o
n
 
l
o
o
p


 
 
 
 
d
e
t
e
c
t
i
o
n
T
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
 
=
 
s
e
t
I
n
t
e
r
v
a
l
(
(
)
 
=
>
 
{


 
 
 
 
 
 
i
f
 
(
!
v
i
d
e
o
R
e
f
.
c
u
r
r
e
n
t
 
|
|
 
!
d
e
t
e
c
t
o
r
R
e
f
.
c
u
r
r
e
n
t
)
 
r
e
t
u
r
n
;


 
 
 
 
 
 
i
f
 
(
v
i
d
e
o
R
e
f
.
c
u
r
r
e
n
t
.
r
e
a
d
y
S
t
a
t
e
 
<
 
2
)
 
r
e
t
u
r
n
;




 
 
 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
r
e
s
u
l
t
 
=
 
d
e
t
e
c
t
o
r
R
e
f
.
c
u
r
r
e
n
t
.
d
e
t
e
c
t
F
o
r
V
i
d
e
o
(


 
 
 
 
 
 
 
 
 
 
v
i
d
e
o
R
e
f
.
c
u
r
r
e
n
t
,


 
 
 
 
 
 
 
 
 
 
p
e
r
f
o
r
m
a
n
c
e
.
n
o
w
(
)


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
u
n
t
 
=
 
r
e
s
u
l
t
.
d
e
t
e
c
t
i
o
n
s
.
l
e
n
g
t
h
;


 
 
 
 
 
 
 
 
s
e
t
C
u
r
r
e
n
t
F
a
c
e
C
o
u
n
t
(
c
o
u
n
t
)
;




 
 
 
 
 
 
 
 
i
f
 
(
c
o
u
n
t
 
=
=
=
 
0
)
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
e
c
u
t
i
v
e
M
u
l
t
i
F
a
c
e
R
e
f
.
c
u
r
r
e
n
t
 
=
 
0
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
e
c
u
t
i
v
e
N
o
F
a
c
e
R
e
f
.
c
u
r
r
e
n
t
 
+
=
 
1
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
c
o
n
s
e
c
u
t
i
v
e
N
o
F
a
c
e
R
e
f
.
c
u
r
r
e
n
t
 
>
=
 
c
o
n
s
e
c
u
t
i
v
e
T
h
r
e
s
h
o
l
d
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
o
n
V
i
o
l
a
t
i
o
n
R
e
f
.
c
u
r
r
e
n
t
(
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
:
 
"
N
O
_
F
A
C
E
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
m
e
s
t
a
m
p
:
 
n
e
w
 
D
a
t
e
(
)
.
t
o
I
S
O
S
t
r
i
n
g
(
)
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
u
r
a
t
i
o
n
:
 
c
o
n
s
e
c
u
t
i
v
e
N
o
F
a
c
e
R
e
f
.
c
u
r
r
e
n
t
,


 
 
 
 
 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
e
c
u
t
i
v
e
N
o
F
a
c
e
R
e
f
.
c
u
r
r
e
n
t
 
=
 
0
;
 
/
/
 
r
e
s
e
t
 
a
f
t
e
r
 
r
e
p
o
r
t
i
n
g


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
c
o
u
n
t
 
>
 
1
)
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
e
c
u
t
i
v
e
N
o
F
a
c
e
R
e
f
.
c
u
r
r
e
n
t
 
=
 
0
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
e
c
u
t
i
v
e
M
u
l
t
i
F
a
c
e
R
e
f
.
c
u
r
r
e
n
t
 
+
=
 
1
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
c
o
n
s
e
c
u
t
i
v
e
M
u
l
t
i
F
a
c
e
R
e
f
.
c
u
r
r
e
n
t
 
>
=
 
c
o
n
s
e
c
u
t
i
v
e
T
h
r
e
s
h
o
l
d
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
o
n
V
i
o
l
a
t
i
o
n
R
e
f
.
c
u
r
r
e
n
t
(
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
:
 
"
M
U
L
T
I
P
L
E
_
F
A
C
E
S
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
m
e
s
t
a
m
p
:
 
n
e
w
 
D
a
t
e
(
)
.
t
o
I
S
O
S
t
r
i
n
g
(
)
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
u
r
a
t
i
o
n
:
 
c
o
n
s
e
c
u
t
i
v
e
M
u
l
t
i
F
a
c
e
R
e
f
.
c
u
r
r
e
n
t
,


 
 
 
 
 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
e
c
u
t
i
v
e
M
u
l
t
i
F
a
c
e
R
e
f
.
c
u
r
r
e
n
t
 
=
 
0
;


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
 
 
/
/
 
E
x
a
c
t
l
y
 
1
 
f
a
c
e
 
-
 
h
a
p
p
y
 
p
a
t
h


 
 
 
 
 
 
 
 
 
 
c
o
n
s
e
c
u
t
i
v
e
N
o
F
a
c
e
R
e
f
.
c
u
r
r
e
n
t
 
=
 
0
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
e
c
u
t
i
v
e
M
u
l
t
i
F
a
c
e
R
e
f
.
c
u
r
r
e
n
t
 
=
 
0
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
 
 
 
 
/
/
 
D
e
t
e
c
t
i
o
n
 
e
r
r
o
r
 
-
 
i
g
n
o
r
e
 
s
i
n
g
l
e
 
f
r
a
m
e
s


 
 
 
 
 
 
}


 
 
 
 
}
,
 
d
e
t
e
c
t
i
o
n
I
n
t
e
r
v
a
l
M
s
)
;




 
 
 
 
/
/
 
4
.
 
S
n
a
p
s
h
o
t
 
t
i
m
e
r


 
 
 
 
s
n
a
p
s
h
o
t
T
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
 
=
 
s
e
t
I
n
t
e
r
v
a
l
(
(
)
 
=
>
 
{


 
 
 
 
 
 
o
n
S
n
a
p
s
h
o
t
R
e
f
.
c
u
r
r
e
n
t
(
)
;


 
 
 
 
}
,
 
s
n
a
p
s
h
o
t
I
n
t
e
r
v
a
l
M
s
)
;


 
 
}
,
 
[
d
e
t
e
c
t
i
o
n
I
n
t
e
r
v
a
l
M
s
,
 
c
o
n
s
e
c
u
t
i
v
e
T
h
r
e
s
h
o
l
d
,
 
s
n
a
p
s
h
o
t
I
n
t
e
r
v
a
l
M
s
]
)
;




 
 
/
*
 
-
-
-
-
 
S
t
o
p
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


 
 
c
o
n
s
t
 
s
t
o
p
 
=
 
u
s
e
C
a
l
l
b
a
c
k
(
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
d
e
t
e
c
t
i
o
n
T
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
)
 
{


 
 
 
 
 
 
c
l
e
a
r
I
n
t
e
r
v
a
l
(
d
e
t
e
c
t
i
o
n
T
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
)
;


 
 
 
 
 
 
d
e
t
e
c
t
i
o
n
T
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
 
=
 
n
u
l
l
;


 
 
 
 
}


 
 
 
 
i
f
 
(
s
n
a
p
s
h
o
t
T
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
)
 
{


 
 
 
 
 
 
c
l
e
a
r
I
n
t
e
r
v
a
l
(
s
n
a
p
s
h
o
t
T
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
)
;


 
 
 
 
 
 
s
n
a
p
s
h
o
t
T
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
 
=
 
n
u
l
l
;


 
 
 
 
}


 
 
 
 
i
f
 
(
d
e
t
e
c
t
o
r
R
e
f
.
c
u
r
r
e
n
t
)
 
{


 
 
 
 
 
 
t
r
y
 
{
 
d
e
t
e
c
t
o
r
R
e
f
.
c
u
r
r
e
n
t
.
c
l
o
s
e
(
)
;
 
}
 
c
a
t
c
h
 
{
 
/
*
 
i
g
n
o
r
e
 
*
/
 
}


 
 
 
 
 
 
d
e
t
e
c
t
o
r
R
e
f
.
c
u
r
r
e
n
t
 
=
 
n
u
l
l
;


 
 
 
 
}


 
 
 
 
i
f
 
(
s
t
r
e
a
m
R
e
f
.
c
u
r
r
e
n
t
)
 
{


 
 
 
 
 
 
s
t
r
e
a
m
R
e
f
.
c
u
r
r
e
n
t
.
g
e
t
T
r
a
c
k
s
(
)
.
f
o
r
E
a
c
h
(
(
t
)
 
=
>
 
t
.
s
t
o
p
(
)
)
;


 
 
 
 
 
 
s
t
r
e
a
m
R
e
f
.
c
u
r
r
e
n
t
 
=
 
n
u
l
l
;


 
 
 
 
}


 
 
 
 
s
e
t
I
s
A
c
t
i
v
e
(
f
a
l
s
e
)
;


 
 
 
 
s
e
t
C
u
r
r
e
n
t
F
a
c
e
C
o
u
n
t
(
0
)
;


 
 
}
,
 
[
]
)
;




 
 
/
/
 
C
l
e
a
n
u
p
 
o
n
 
u
n
m
o
u
n
t


 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
s
t
o
p
,
 
[
s
t
o
p
]
)
;




 
 
r
e
t
u
r
n
 
{
 
v
i
d
e
o
R
e
f
,
 
i
s
L
o
a
d
i
n
g
,
 
i
s
A
c
t
i
v
e
,
 
e
r
r
o
r
,
 
c
u
r
r
e
n
t
F
a
c
e
C
o
u
n
t
,
 
s
t
a
r
t
,
 
s
t
o
p
 
}
;


}


