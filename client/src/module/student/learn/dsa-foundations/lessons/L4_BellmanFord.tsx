
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
M
e
m
o
,
 
u
s
e
S
t
a
t
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
m
p
o
r
t
 
{
 
B
o
o
k
O
p
e
n
,
 
L
i
g
h
t
b
u
l
b
,
 
P
l
a
y
,
 
T
a
r
g
e
t
 
}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
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
 
{


 
 
L
e
s
s
o
n
S
h
e
l
l
,


 
 
t
y
p
e
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
,


 
 
t
y
p
e
 
L
e
s
s
o
n
T
a
b
D
e
f
,


}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
d
s
a
-
t
h
e
o
r
y
/
L
e
s
s
o
n
S
h
e
l
l
"
;


i
m
p
o
r
t
 
{


 
 
A
l
g
o
C
a
n
v
a
s
,


 
 
I
n
p
u
t
E
d
i
t
o
r
,


 
 
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
,


 
 
u
s
e
S
t
e
p
P
l
a
y
e
r
,


 
 
V
a
r
i
a
b
l
e
s
P
a
n
e
l
,


}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
d
s
a
-
t
h
e
o
r
y
/
a
l
g
o
"
;


i
m
p
o
r
t
 
{


 
 
C
a
l
l
o
u
t
,


 
 
C
a
r
d
,


 
 
L
e
d
e
,


 
 
S
e
c
t
i
o
n
E
y
e
b
r
o
w
,


 
 
S
e
c
t
i
o
n
T
i
t
l
e
,


 
 
S
u
b
H
e
a
d
i
n
g
,


 
 
T
H
E
M
E
,


}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
d
s
a
-
t
h
e
o
r
y
/
p
r
i
m
i
t
i
v
e
s
"
;




/
*
 
N
o
 
p
r
a
c
t
i
c
e
 
t
a
b
,
 
p
r
a
c
t
i
c
e
S
l
u
g
 
i
s
 
n
u
l
l
 
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


/
*
 
 
P
a
r
s
e
 
d
i
r
e
c
t
e
d
 
w
e
i
g
h
t
e
d
 
e
d
g
e
s
 
 
A
>
B
:
w
 
 
(
n
e
g
a
t
i
v
e
 
a
l
l
o
w
e
d
)
 
 
 
 
 
 
 
 
 
 
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




f
u
n
c
t
i
o
n
 
p
a
r
s
e
B
F
(
i
n
p
u
t
:
 
s
t
r
i
n
g
)
:
 
{
 
i
d
s
:
 
s
t
r
i
n
g
[
]
;
 
e
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
t
o
:
 
s
t
r
i
n
g
;
 
w
:
 
n
u
m
b
e
r
 
}
[
]
 
}
 
|
 
n
u
l
l
 
{


 
 
c
o
n
s
t
 
t
o
k
e
n
s
 
=
 
i
n
p
u
t
.
s
p
l
i
t
(
/
[
,
\
s
]
+
/
)
.
m
a
p
(
(
t
)
 
=
>
 
t
.
t
r
i
m
(
)
)
.
f
i
l
t
e
r
(
B
o
o
l
e
a
n
)
;


 
 
i
f
 
(
t
o
k
e
n
s
.
l
e
n
g
t
h
 
=
=
=
 
0
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


 
 
c
o
n
s
t
 
e
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
t
o
:
 
s
t
r
i
n
g
;
 
w
:
 
n
u
m
b
e
r
 
}
[
]
 
=
 
[
]
;


 
 
c
o
n
s
t
 
i
d
s
 
=
 
n
e
w
 
S
e
t
<
s
t
r
i
n
g
>
(
)
;


 
 
f
o
r
 
(
c
o
n
s
t
 
t
o
k
 
o
f
 
t
o
k
e
n
s
)
 
{


 
 
 
 
c
o
n
s
t
 
m
 
=
 
t
o
k
.
m
a
t
c
h
(
/
^
(
[
A
-
Z
a
-
z
0
-
9
_
]
+
)
>
(
[
A
-
Z
a
-
z
0
-
9
_
]
+
)
:
(
-
?
\
d
+
)
$
/
)
;


 
 
 
 
i
f
 
(
!
m
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


 
 
 
 
e
d
g
e
s
.
p
u
s
h
(
{
 
f
r
o
m
:
 
m
[
1
]
,
 
t
o
:
 
m
[
2
]
,
 
w
:
 
N
u
m
b
e
r
(
m
[
3
]
)
 
}
)
;


 
 
 
 
i
d
s
.
a
d
d
(
m
[
1
]
)
;


 
 
 
 
i
d
s
.
a
d
d
(
m
[
2
]
)
;


 
 
}


 
 
r
e
t
u
r
n
 
{
 
i
d
s
:
 
[
.
.
.
i
d
s
]
.
s
o
r
t
(
)
,
 
e
d
g
e
s
 
}
;


}




f
u
n
c
t
i
o
n
 
a
u
t
o
L
a
y
o
u
t
(
i
d
s
:
 
s
t
r
i
n
g
[
]
,
 
c
x
 
=
 
3
0
0
,
 
c
y
 
=
 
1
5
0
,
 
r
 
=
 
1
1
0
)
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
{
 
x
:
 
n
u
m
b
e
r
;
 
y
:
 
n
u
m
b
e
r
 
}
>
 
{


 
 
c
o
n
s
t
 
o
u
t
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
{
 
x
:
 
n
u
m
b
e
r
;
 
y
:
 
n
u
m
b
e
r
 
}
>
 
=
 
{
}
;


 
 
c
o
n
s
t
 
n
 
=
 
i
d
s
.
l
e
n
g
t
h
;


 
 
i
d
s
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
i
d
,
 
i
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
a
n
g
 
=
 
(
2
 
*
 
M
a
t
h
.
P
I
 
*
 
i
)
 
/
 
M
a
t
h
.
m
a
x
(
1
,
 
n
)
 
-
 
M
a
t
h
.
P
I
 
/
 
2
;


 
 
 
 
o
u
t
[
i
d
]
 
=
 
{
 
x
:
 
c
x
 
+
 
r
 
*
 
M
a
t
h
.
c
o
s
(
a
n
g
)
,
 
y
:
 
c
y
 
+
 
r
 
*
 
M
a
t
h
.
s
i
n
(
a
n
g
)
 
}
;


 
 
}
)
;


 
 
r
e
t
u
r
n
 
o
u
t
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
 
 
B
e
l
l
m
a
n
-
F
o
r
d
 
F
r
a
m
e
 
b
u
i
l
d
e
r
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




t
y
p
e
 
E
d
g
e
R
o
w
S
t
a
t
u
s
 
=
 
"
p
e
n
d
i
n
g
"
 
|
 
"
e
x
a
m
i
n
i
n
g
"
 
|
 
"
r
e
l
a
x
e
d
"
 
|
 
"
s
k
i
p
p
e
d
"
;


t
y
p
e
 
N
o
d
e
S
t
a
t
e
 
=
 
"
d
e
f
a
u
l
t
"
 
|
 
"
a
c
t
i
v
e
"
 
|
 
"
d
o
n
e
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
 
B
F
r
a
m
e
 
{


 
 
l
i
n
e
:
 
n
u
m
b
e
r
;


 
 
v
a
r
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
s
t
r
i
n
g
 
|
 
n
u
m
b
e
r
 
|
 
u
n
d
e
f
i
n
e
d
>
;


 
 
m
e
s
s
a
g
e
:
 
s
t
r
i
n
g
;


 
 
d
i
s
t
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
n
u
m
b
e
r
 
|
 
u
n
d
e
f
i
n
e
d
>
;


 
 
n
o
d
e
S
t
a
t
e
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
N
o
d
e
S
t
a
t
e
>
;


 
 
r
e
l
a
x
E
d
g
e
s
:
 
S
e
t
<
s
t
r
i
n
g
>
;


 
 
n
e
g
C
y
c
l
e
?
:
 
b
o
o
l
e
a
n
;


 
 
f
l
a
s
h
K
e
y
?
:
 
s
t
r
i
n
g
;


 
 
p
a
s
s
:
 
n
u
m
b
e
r
;


 
 
t
o
t
a
l
P
a
s
s
e
s
:
 
n
u
m
b
e
r
;


 
 
e
d
g
e
R
o
w
S
t
a
t
e
s
:
 
E
d
g
e
R
o
w
S
t
a
t
u
s
[
]
;


}




c
o
n
s
t
 
P
S
E
U
D
O
 
=
 
[


 
 
"
B
e
l
l
m
a
n
F
o
r
d
(
G
,
 
s
)
:
"
,


 
 
"
 
 
f
o
r
 
e
a
c
h
 
v
:
 
d
i
s
t
[
v
]
 
←
 
∞
"
,


 
 
"
 
 
d
i
s
t
[
s
]
 
←
 
0
"
,


 
 
"
 
 
r
e
p
e
a
t
 
V
 
−
 
1
 
t
i
m
e
s
:
"
,


 
 
"
 
 
 
 
f
o
r
 
e
a
c
h
 
e
d
g
e
 
(
u
,
 
v
,
 
w
)
:
"
,


 
 
"
 
 
 
 
 
 
i
f
 
d
i
s
t
[
u
]
 
+
 
w
 
<
 
d
i
s
t
[
v
]
:
"
,


 
 
"
 
 
 
 
 
 
 
 
d
i
s
t
[
v
]
 
←
 
d
i
s
t
[
u
]
 
+
 
w
"
,


 
 
"
 
 
/
/
 
N
e
g
a
t
i
v
e
-
c
y
c
l
e
 
c
h
e
c
k
:
"
,


 
 
"
 
 
f
o
r
 
e
a
c
h
 
e
d
g
e
 
(
u
,
 
v
,
 
w
)
:
"
,


 
 
"
 
 
 
 
i
f
 
d
i
s
t
[
u
]
 
+
 
w
 
<
 
d
i
s
t
[
v
]
:
"
,


 
 
"
 
 
 
 
 
 
r
e
p
o
r
t
 
N
E
G
A
T
I
V
E
 
C
Y
C
L
E
"
,


]
;




f
u
n
c
t
i
o
n
 
b
u
i
l
d
B
F
F
r
a
m
e
s
(


 
 
i
d
s
:
 
s
t
r
i
n
g
[
]
,


 
 
e
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
t
o
:
 
s
t
r
i
n
g
;
 
w
:
 
n
u
m
b
e
r
 
}
[
]
,


 
 
s
o
u
r
c
e
:
 
s
t
r
i
n
g
,


)
:
 
B
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
f
:
 
B
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
c
o
n
s
t
 
V
 
=
 
i
d
s
.
l
e
n
g
t
h
;


 
 
c
o
n
s
t
 
t
o
t
a
l
P
a
s
s
e
s
 
=
 
M
a
t
h
.
m
a
x
(
0
,
 
V
 
-
 
1
)
;


 
 
c
o
n
s
t
 
e
m
p
t
y
R
o
w
s
 
=
 
(
)
:
 
E
d
g
e
R
o
w
S
t
a
t
u
s
[
]
 
=
>
 
e
d
g
e
s
.
m
a
p
(
(
)
 
=
>
 
"
p
e
n
d
i
n
g
"
)
;




 
 
i
f
 
(
!
i
d
s
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
s
o
u
r
c
e
)
)
 
{


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
0
,
 
v
a
r
s
:
 
{
}
,
 
m
e
s
s
a
g
e
:
 
`
S
o
u
r
c
e
 
'
$
{
s
o
u
r
c
e
}
'
 
n
o
t
 
i
n
 
g
r
a
p
h
`
,
 
d
i
s
t
:
 
{
}
,
 
n
o
d
e
S
t
a
t
e
s
:
 
{
}
,
 
r
e
l
a
x
E
d
g
e
s
:
 
n
e
w
 
S
e
t
(
)
,
 
p
a
s
s
:
 
0
,
 
t
o
t
a
l
P
a
s
s
e
s
,
 
e
d
g
e
R
o
w
S
t
a
t
e
s
:
 
e
m
p
t
y
R
o
w
s
(
)
 
}
)
;


 
 
 
 
r
e
t
u
r
n
 
f
;


 
 
}




 
 
c
o
n
s
t
 
d
i
s
t
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
n
u
m
b
e
r
 
|
 
u
n
d
e
f
i
n
e
d
>
 
=
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
[
i
d
,
 
u
n
d
e
f
i
n
e
d
]
)
)
;


 
 
c
o
n
s
t
 
s
t
a
t
e
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
N
o
d
e
S
t
a
t
e
>
 
=
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
[
i
d
,
 
"
d
e
f
a
u
l
t
"
]
)
)
;


 
 
c
o
n
s
t
 
r
e
l
a
x
E
d
g
e
s
 
=
 
n
e
w
 
S
e
t
<
s
t
r
i
n
g
>
(
)
;


 
 
l
e
t
 
p
a
s
s
 
=
 
0
;


 
 
l
e
t
 
e
d
g
e
R
o
w
S
t
a
t
e
s
:
 
E
d
g
e
R
o
w
S
t
a
t
u
s
[
]
 
=
 
e
m
p
t
y
R
o
w
s
(
)
;




 
 
c
o
n
s
t
 
c
l
o
n
e
 
=
 
(
p
a
t
c
h
:
 
P
a
r
t
i
a
l
<
B
F
r
a
m
e
>
)
:
 
B
F
r
a
m
e
 
=
>
 
(
{


 
 
 
 
l
i
n
e
:
 
p
a
t
c
h
.
l
i
n
e
 
?
?
 
0
,


 
 
 
 
v
a
r
s
:
 
p
a
t
c
h
.
v
a
r
s
 
?
?
 
{
}
,


 
 
 
 
m
e
s
s
a
g
e
:
 
p
a
t
c
h
.
m
e
s
s
a
g
e
 
?
?
 
"
"
,


 
 
 
 
d
i
s
t
:
 
{
 
.
.
.
d
i
s
t
 
}
,


 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
.
.
.
s
t
a
t
e
 
}
,


 
 
 
 
r
e
l
a
x
E
d
g
e
s
:
 
n
e
w
 
S
e
t
(
r
e
l
a
x
E
d
g
e
s
)
,


 
 
 
 
n
e
g
C
y
c
l
e
:
 
p
a
t
c
h
.
n
e
g
C
y
c
l
e
,


 
 
 
 
f
l
a
s
h
K
e
y
:
 
p
a
t
c
h
.
f
l
a
s
h
K
e
y
,


 
 
 
 
p
a
s
s
:
 
p
a
t
c
h
.
p
a
s
s
 
?
?
 
p
a
s
s
,


 
 
 
 
t
o
t
a
l
P
a
s
s
e
s
,


 
 
 
 
e
d
g
e
R
o
w
S
t
a
t
e
s
:
 
p
a
t
c
h
.
e
d
g
e
R
o
w
S
t
a
t
e
s
 
?
 
[
.
.
.
p
a
t
c
h
.
e
d
g
e
R
o
w
S
t
a
t
e
s
]
 
:
 
[
.
.
.
e
d
g
e
R
o
w
S
t
a
t
e
s
]
,


 
 
}
)
;




 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
1
,
 
m
e
s
s
a
g
e
:
 
"
I
n
i
t
i
a
l
i
z
e
 
d
i
s
t
[
v
]
 
=
 
∞
 
f
o
r
 
e
v
e
r
y
 
v
e
r
t
e
x
.
"
 
}
)
)
;


 
 
d
i
s
t
[
s
o
u
r
c
e
]
 
=
 
0
;


 
 
s
t
a
t
e
[
s
o
u
r
c
e
]
 
=
 
"
a
c
t
i
v
e
"
;


 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
2
,
 
m
e
s
s
a
g
e
:
 
`
S
e
t
 
d
i
s
t
[
$
{
s
o
u
r
c
e
}
]
 
=
 
0
.
`
,
 
f
l
a
s
h
K
e
y
:
 
s
o
u
r
c
e
 
}
)
)
;




 
 
f
o
r
 
(
p
a
s
s
 
=
 
1
;
 
p
a
s
s
 
<
=
 
t
o
t
a
l
P
a
s
s
e
s
;
 
p
a
s
s
+
+
)
 
{


 
 
 
 
e
d
g
e
R
o
w
S
t
a
t
e
s
 
=
 
e
m
p
t
y
R
o
w
s
(
)
;


 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
3
,
 
m
e
s
s
a
g
e
:
 
`
P
a
s
s
 
$
{
p
a
s
s
}
 
o
f
 
$
{
t
o
t
a
l
P
a
s
s
e
s
}
.
`
,
 
v
a
r
s
:
 
{
 
p
a
s
s
,
 
"
V
-
1
"
:
 
t
o
t
a
l
P
a
s
s
e
s
 
}
 
}
)
)
;


 
 
 
 
l
e
t
 
u
p
d
a
t
e
d
A
n
y
 
=
 
f
a
l
s
e
;


 
 
 
 
f
o
r
 
(
l
e
t
 
e
i
 
=
 
0
;
 
e
i
 
<
 
e
d
g
e
s
.
l
e
n
g
t
h
;
 
e
i
+
+
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
d
g
e
s
[
e
i
]
;


 
 
 
 
 
 
e
d
g
e
R
o
w
S
t
a
t
e
s
[
e
i
]
 
=
 
"
e
x
a
m
i
n
i
n
g
"
;


 
 
 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
4
,
 
m
e
s
s
a
g
e
:
 
`
E
x
a
m
i
n
e
 
e
d
g
e
 
#
$
{
e
i
 
+
 
1
}
:
 
$
{
e
.
f
r
o
m
}
→
$
{
e
.
t
o
}
 
(
w
=
$
{
e
.
w
}
)
.
`
,
 
v
a
r
s
:
 
{
 
p
a
s
s
,
 
e
d
g
e
:
 
`
$
{
e
.
f
r
o
m
}
→
$
{
e
.
t
o
}
`
,
 
w
:
 
e
.
w
,
 
"
d
[
u
]
"
:
 
d
i
s
t
[
e
.
f
r
o
m
]
 
?
?
 
"
∞
"
,
 
"
d
[
v
]
"
:
 
d
i
s
t
[
e
.
t
o
]
 
?
?
 
"
∞
"
 
}
 
}
)
)
;


 
 
 
 
 
 
c
o
n
s
t
 
d
u
 
=
 
d
i
s
t
[
e
.
f
r
o
m
]
;


 
 
 
 
 
 
i
f
 
(
d
u
 
!
=
=
 
u
n
d
e
f
i
n
e
d
 
&
&
 
d
u
 
+
 
e
.
w
 
<
 
(
d
i
s
t
[
e
.
t
o
]
 
?
?
 
I
n
f
i
n
i
t
y
)
)
 
{


 
 
 
 
 
 
 
 
d
i
s
t
[
e
.
t
o
]
 
=
 
d
u
 
+
 
e
.
w
;


 
 
 
 
 
 
 
 
e
d
g
e
R
o
w
S
t
a
t
e
s
[
e
i
]
 
=
 
"
r
e
l
a
x
e
d
"
;


 
 
 
 
 
 
 
 
r
e
l
a
x
E
d
g
e
s
.
a
d
d
(
`
$
{
e
.
f
r
o
m
}
-
$
{
e
.
t
o
}
`
)
;


 
 
 
 
 
 
 
 
u
p
d
a
t
e
d
A
n
y
 
=
 
t
r
u
e
;


 
 
 
 
 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
6
,
 
m
e
s
s
a
g
e
:
 
`
R
e
l
a
x
,
 
d
i
s
t
[
$
{
e
.
t
o
}
]
 
=
 
$
{
d
u
}
 
+
 
$
{
e
.
w
}
 
=
 
$
{
d
i
s
t
[
e
.
t
o
]
}
.
`
,
 
f
l
a
s
h
K
e
y
:
 
e
.
t
o
,
 
v
a
r
s
:
 
{
 
p
a
s
s
,
 
"
d
[
v
]
"
:
 
d
i
s
t
[
e
.
t
o
]
 
}
 
}
)
)
;


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
e
d
g
e
R
o
w
S
t
a
t
e
s
[
e
i
]
 
=
 
"
s
k
i
p
p
e
d
"
;


 
 
 
 
 
 
}


 
 
 
 
}


 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
3
,
 
m
e
s
s
a
g
e
:
 
`
P
a
s
s
 
$
{
p
a
s
s
}
 
c
o
m
p
l
e
t
e
.
`
,
 
v
a
r
s
:
 
{
 
p
a
s
s
 
}
 
}
)
)
;


 
 
 
 
i
f
 
(
!
u
p
d
a
t
e
d
A
n
y
)
 
{


 
 
 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
3
,
 
m
e
s
s
a
g
e
:
 
`
P
a
s
s
 
$
{
p
a
s
s
}
:
 
z
e
r
o
 
r
e
l
a
x
a
t
i
o
n
s
,
 
e
a
r
l
y
 
t
e
r
m
i
n
a
t
e
 
(
s
a
v
e
s
 
$
{
t
o
t
a
l
P
a
s
s
e
s
 
-
 
p
a
s
s
}
 
p
a
s
s
e
s
)
.
`
,
 
v
a
r
s
:
 
{
 
p
a
s
s
,
 
s
a
v
e
d
P
a
s
s
e
s
:
 
t
o
t
a
l
P
a
s
s
e
s
 
-
 
p
a
s
s
 
}
 
}
)
)
;


 
 
 
 
 
 
b
r
e
a
k
;


 
 
 
 
}


 
 
}




 
 
/
/
 
n
e
g
a
t
i
v
e
 
c
y
c
l
e
 
c
h
e
c
k


 
 
p
a
s
s
 
=
 
t
o
t
a
l
P
a
s
s
e
s
 
+
 
1
;


 
 
e
d
g
e
R
o
w
S
t
a
t
e
s
 
=
 
e
m
p
t
y
R
o
w
s
(
)
;


 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
8
,
 
m
e
s
s
a
g
e
:
 
"
N
e
g
a
t
i
v
e
-
c
y
c
l
e
 
c
h
e
c
k
:
 
r
u
n
 
a
 
V
-
t
h
 
p
a
s
s
.
 
A
n
y
 
f
u
r
t
h
e
r
 
r
e
l
a
x
a
t
i
o
n
 
=
 
n
e
g
a
t
i
v
e
 
c
y
c
l
e
.
"
,
 
v
a
r
s
:
 
{
 
p
a
s
s
:
 
"
V
 
(
c
h
e
c
k
)
"
 
}
 
}
)
)
;


 
 
l
e
t
 
n
e
g
 
=
 
f
a
l
s
e
;


 
 
f
o
r
 
(
l
e
t
 
e
i
 
=
 
0
;
 
e
i
 
<
 
e
d
g
e
s
.
l
e
n
g
t
h
;
 
e
i
+
+
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
d
g
e
s
[
e
i
]
;


 
 
 
 
e
d
g
e
R
o
w
S
t
a
t
e
s
[
e
i
]
 
=
 
"
e
x
a
m
i
n
i
n
g
"
;


 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
9
,
 
m
e
s
s
a
g
e
:
 
`
R
e
-
e
x
a
m
i
n
e
 
e
d
g
e
 
#
$
{
e
i
 
+
 
1
}
:
 
$
{
e
.
f
r
o
m
}
→
$
{
e
.
t
o
}
.
`
,
 
v
a
r
s
:
 
{
 
e
d
g
e
:
 
`
$
{
e
.
f
r
o
m
}
→
$
{
e
.
t
o
}
`
,
 
w
:
 
e
.
w
 
}
 
}
)
)
;


 
 
 
 
c
o
n
s
t
 
d
u
 
=
 
d
i
s
t
[
e
.
f
r
o
m
]
;


 
 
 
 
i
f
 
(
d
u
 
!
=
=
 
u
n
d
e
f
i
n
e
d
 
&
&
 
d
u
 
+
 
e
.
w
 
<
 
(
d
i
s
t
[
e
.
t
o
]
 
?
?
 
I
n
f
i
n
i
t
y
)
)
 
{


 
 
 
 
 
 
n
e
g
 
=
 
t
r
u
e
;


 
 
 
 
 
 
e
d
g
e
R
o
w
S
t
a
t
e
s
[
e
i
]
 
=
 
"
r
e
l
a
x
e
d
"
;


 
 
 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
1
0
,
 
m
e
s
s
a
g
e
:
 
`
R
E
L
A
X
A
T
I
O
N
 
O
N
 
V
-
T
H
 
P
A
S
S
,
 
N
E
G
A
T
I
V
E
 
C
Y
C
L
E
 
d
e
t
e
c
t
e
d
 
o
n
 
$
{
e
.
f
r
o
m
}
→
$
{
e
.
t
o
}
.
`
,
 
n
e
g
C
y
c
l
e
:
 
t
r
u
e
,
 
v
a
r
s
:
 
{
 
u
:
 
e
.
f
r
o
m
,
 
v
:
 
e
.
t
o
,
 
w
:
 
e
.
w
 
}
 
}
)
)
;


 
 
 
 
 
 
b
r
e
a
k
;


 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
e
d
g
e
R
o
w
S
t
a
t
e
s
[
e
i
]
 
=
 
"
s
k
i
p
p
e
d
"
;


 
 
 
 
}


 
 
}


 
 
i
f
 
(
!
n
e
g
)
 
{


 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
8
,
 
m
e
s
s
a
g
e
:
 
`
V
-
t
h
 
p
a
s
s
:
 
n
o
 
r
e
l
a
x
a
t
i
o
n
s
.
 
A
l
l
 
$
{
i
d
s
.
l
e
n
g
t
h
}
 
d
i
s
t
a
n
c
e
s
 
a
r
e
 
f
i
n
a
l
.
`
 
}
)
)
;


 
 
}




 
 
r
e
t
u
r
n
 
f
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
 
 
I
n
l
i
n
e
 
g
r
a
p
h
 
S
V
G
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




c
o
n
s
t
 
N
O
D
E
_
S
T
A
T
E
_
C
O
L
O
R
:
 
R
e
c
o
r
d
<
N
o
d
e
S
t
a
t
e
,
 
s
t
r
i
n
g
>
 
=
 
{


 
 
d
e
f
a
u
l
t
:
 
T
H
E
M
E
.
t
e
x
t
M
u
t
e
d
,


 
 
a
c
t
i
v
e
:
 
"
#
3
b
8
2
f
6
"
,


 
 
d
o
n
e
:
 
"
#
1
0
b
9
8
1
"
,


}
;




f
u
n
c
t
i
o
n
 
G
r
a
p
h
S
V
G
(
{


 
 
i
d
s
,


 
 
e
d
g
e
s
,


 
 
p
o
s
,


 
 
f
r
a
m
e
,


}
:
 
{


 
 
i
d
s
:
 
s
t
r
i
n
g
[
]
;


 
 
e
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
t
o
:
 
s
t
r
i
n
g
;
 
w
:
 
n
u
m
b
e
r
 
}
[
]
;


 
 
p
o
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
{
 
x
:
 
n
u
m
b
e
r
;
 
y
:
 
n
u
m
b
e
r
 
}
>
;


 
 
f
r
a
m
e
:
 
B
F
r
a
m
e
;


}
)
 
{


 
 
c
o
n
s
t
 
W
 
=
 
6
0
0
;


 
 
c
o
n
s
t
 
H
 
=
 
3
0
0
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
w
-
f
u
l
l
 
o
v
e
r
f
l
o
w
-
x
-
a
u
t
o
 
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
 
b
o
r
d
e
r
 
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
 
b
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
"
>


 
 
 
 
 
 
<
s
v
g
 
w
i
d
t
h
=
{
W
}
 
h
e
i
g
h
t
=
{
H
}
 
v
i
e
w
B
o
x
=
{
`
0
 
0
 
$
{
W
}
 
$
{
H
}
`
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
"
b
l
o
c
k
 
m
x
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
<
d
e
f
s
>


 
 
 
 
 
 
 
 
 
 
<
m
a
r
k
e
r
 
i
d
=
"
a
r
r
-
b
f
"
 
m
a
r
k
e
r
W
i
d
t
h
=
"
8
"
 
m
a
r
k
e
r
H
e
i
g
h
t
=
"
8
"
 
r
e
f
X
=
"
6
"
 
r
e
f
Y
=
"
3
"
 
o
r
i
e
n
t
=
"
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
0
,
0
 
L
0
,
6
 
L
8
,
3
 
z
"
 
f
i
l
l
=
{
T
H
E
M
E
.
b
o
r
d
e
r
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
m
a
r
k
e
r
>


 
 
 
 
 
 
 
 
 
 
<
m
a
r
k
e
r
 
i
d
=
"
a
r
r
-
b
f
-
r
e
l
a
x
"
 
m
a
r
k
e
r
W
i
d
t
h
=
"
8
"
 
m
a
r
k
e
r
H
e
i
g
h
t
=
"
8
"
 
r
e
f
X
=
"
6
"
 
r
e
f
Y
=
"
3
"
 
o
r
i
e
n
t
=
"
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
0
,
0
 
L
0
,
6
 
L
8
,
3
 
z
"
 
f
i
l
l
=
"
#
f
b
b
f
2
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
m
a
r
k
e
r
>


 
 
 
 
 
 
 
 
 
 
<
m
a
r
k
e
r
 
i
d
=
"
a
r
r
-
b
f
-
n
e
g
"
 
m
a
r
k
e
r
W
i
d
t
h
=
"
8
"
 
m
a
r
k
e
r
H
e
i
g
h
t
=
"
8
"
 
r
e
f
X
=
"
6
"
 
r
e
f
Y
=
"
3
"
 
o
r
i
e
n
t
=
"
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
0
,
0
 
L
0
,
6
 
L
8
,
3
 
z
"
 
f
i
l
l
=
"
#
e
f
4
4
4
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
m
a
r
k
e
r
>


 
 
 
 
 
 
 
 
<
/
d
e
f
s
>


 
 
 
 
 
 
 
 
{
e
d
g
e
s
.
m
a
p
(
(
e
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
1
 
=
 
p
o
s
[
e
.
f
r
o
m
]
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
2
 
=
 
p
o
s
[
e
.
t
o
]
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
p
1
 
|
|
 
!
p
2
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


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
k
 
=
 
`
$
{
e
.
f
r
o
m
}
-
$
{
e
.
t
o
}
`
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
R
e
l
a
x
 
=
 
f
r
a
m
e
.
r
e
l
a
x
E
d
g
e
s
.
h
a
s
(
k
)
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
N
e
g
 
=
 
f
r
a
m
e
.
n
e
g
C
y
c
l
e
 
&
&
 
i
s
R
e
l
a
x
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
t
r
o
k
e
 
=
 
i
s
N
e
g
 
?
 
"
#
e
f
4
4
4
4
"
 
:
 
i
s
R
e
l
a
x
 
?
 
"
#
f
b
b
f
2
4
"
 
:
 
T
H
E
M
E
.
b
o
r
d
e
r
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
m
a
r
k
R
e
f
 
=
 
i
s
N
e
g
 
?
 
"
u
r
l
(
#
a
r
r
-
b
f
-
n
e
g
)
"
 
:
 
i
s
R
e
l
a
x
 
?
 
"
u
r
l
(
#
a
r
r
-
b
f
-
r
e
l
a
x
)
"
 
:
 
"
u
r
l
(
#
a
r
r
-
b
f
)
"
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
x
 
=
 
p
2
.
x
 
-
 
p
1
.
x
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
y
 
=
 
p
2
.
y
 
-
 
p
1
.
y
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
l
e
n
 
=
 
M
a
t
h
.
s
q
r
t
(
d
x
 
*
 
d
x
 
+
 
d
y
 
*
 
d
y
)
 
|
|
 
1
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
e
x
 
=
 
p
2
.
x
 
-
 
(
2
2
 
/
 
l
e
n
)
 
*
 
d
x
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
e
y
 
=
 
p
2
.
y
 
-
 
(
2
2
 
/
 
l
e
n
)
 
*
 
d
y
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
x
 
=
 
p
1
.
x
 
+
 
(
2
2
 
/
 
l
e
n
)
 
*
 
d
x
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
y
 
=
 
p
1
.
y
 
+
 
(
2
2
 
/
 
l
e
n
)
 
*
 
d
y
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
m
x
 
=
 
(
p
1
.
x
 
+
 
p
2
.
x
)
 
/
 
2
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
m
y
 
=
 
(
p
1
.
y
 
+
 
p
2
.
y
)
 
/
 
2
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
g
 
k
e
y
=
{
k
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
{
s
x
}
 
y
1
=
{
s
y
}
 
x
2
=
{
e
x
}
 
y
2
=
{
e
y
}
 
s
t
r
o
k
e
=
{
s
t
r
o
k
e
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
i
s
R
e
l
a
x
 
?
 
2
.
5
 
:
 
1
.
5
}
 
m
a
r
k
e
r
E
n
d
=
{
m
a
r
k
R
e
f
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
m
x
}
 
y
=
{
m
y
 
-
 
5
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
o
n
t
S
i
z
e
=
"
1
0
"
 
f
i
l
l
=
{
e
.
w
 
<
 
0
 
?
 
"
#
e
f
4
4
4
4
"
 
:
 
T
H
E
M
E
.
a
c
c
e
n
t
}
 
f
o
n
t
W
e
i
g
h
t
=
"
7
0
0
"
 
f
o
n
t
F
a
m
i
l
y
=
{
T
H
E
M
E
.
m
o
n
o
}
>
{
e
.
w
}
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
g
>


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
{
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
 
=
 
p
o
s
[
i
d
]
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
p
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


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
s
 
=
 
f
r
a
m
e
.
n
o
d
e
S
t
a
t
e
s
[
i
d
]
 
?
?
 
"
d
e
f
a
u
l
t
"
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
f
i
l
l
 
=
 
N
O
D
E
_
S
T
A
T
E
_
C
O
L
O
R
[
n
s
]
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
 
=
 
f
r
a
m
e
.
d
i
s
t
[
i
d
]
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
g
 
k
e
y
=
{
i
d
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
c
i
r
c
l
e
 
c
x
=
{
p
.
x
}
 
c
y
=
{
p
.
y
}
 
r
=
{
2
0
}
 
f
i
l
l
=
{
f
i
l
l
}
 
s
t
r
o
k
e
=
{
T
H
E
M
E
.
b
o
r
d
e
r
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
5
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
p
.
x
}
 
y
=
{
p
.
y
 
+
 
1
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
d
o
m
i
n
a
n
t
B
a
s
e
l
i
n
e
=
"
m
i
d
d
l
e
"
 
f
o
n
t
S
i
z
e
=
"
1
3
"
 
f
i
l
l
=
"
#
f
f
f
"
 
f
o
n
t
W
e
i
g
h
t
=
"
7
0
0
"
 
f
o
n
t
F
a
m
i
l
y
=
{
T
H
E
M
E
.
h
e
a
d
i
n
g
}
>
{
i
d
}
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
p
.
x
 
+
 
1
4
}
 
y
=
{
p
.
y
 
-
 
1
4
}
 
f
o
n
t
S
i
z
e
=
"
1
0
"
 
f
i
l
l
=
{
T
H
E
M
E
.
a
c
c
e
n
t
}
 
f
o
n
t
W
e
i
g
h
t
=
"
7
0
0
"
 
f
o
n
t
F
a
m
i
l
y
=
{
T
H
E
M
E
.
m
o
n
o
}
>
{
d
 
!
=
=
 
u
n
d
e
f
i
n
e
d
 
?
 
d
 
:
 
"
∞
"
}
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
g
>


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
<
/
s
v
g
>


 
 
 
 
<
/
d
i
v
>


 
 
)
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
 
 
E
d
g
e
 
t
a
b
l
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




f
u
n
c
t
i
o
n
 
E
d
g
e
T
a
b
l
e
(
{
 
e
d
g
e
s
,
 
r
o
w
S
t
a
t
e
s
 
}
:
 
{
 
e
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
t
o
:
 
s
t
r
i
n
g
;
 
w
:
 
n
u
m
b
e
r
 
}
[
]
;
 
r
o
w
S
t
a
t
e
s
:
 
E
d
g
e
R
o
w
S
t
a
t
u
s
[
]
 
}
)
 
{


 
 
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
o
v
e
r
f
l
o
w
-
x
-
a
u
t
o
 
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
 
b
o
r
d
e
r
 
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
>


 
 
 
 
 
 
<
t
a
b
l
e
 
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
w
-
f
u
l
l
 
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
"
>


 
 
 
 
 
 
 
 
<
t
h
e
a
d
 
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
b
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
/
5
0
"
>


 
 
 
 
 
 
 
 
 
 
<
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
{
[
"
#
"
,
 
"
E
d
g
e
"
,
 
"
w
"
,
 
"
S
t
a
t
u
s
"
]
.
m
a
p
(
(
h
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
 
k
e
y
=
{
h
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
"
t
e
x
t
-
l
e
f
t
 
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
[
1
0
p
x
]
 
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
s
t
 
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
5
0
0
 
b
o
r
d
e
r
-
b
 
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
>
{
h
}
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
<
/
t
r
>


 
 
 
 
 
 
 
 
<
/
t
h
e
a
d
>


 
 
 
 
 
 
 
 
<
t
b
o
d
y
>


 
 
 
 
 
 
 
 
 
 
{
e
d
g
e
s
.
m
a
p
(
(
e
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
 
=
 
r
o
w
S
t
a
t
e
s
[
i
]
 
?
?
 
"
p
e
n
d
i
n
g
"
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
l
o
r
s
:
 
R
e
c
o
r
d
<
E
d
g
e
R
o
w
S
t
a
t
u
s
,
 
s
t
r
i
n
g
>
 
=
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
e
n
d
i
n
g
:
 
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
4
0
0
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
x
a
m
i
n
i
n
g
:
 
"
t
e
x
t
-
a
m
b
e
r
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
a
m
b
e
r
-
4
0
0
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
l
a
x
e
d
:
 
"
t
e
x
t
-
l
i
m
e
-
7
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
l
i
m
e
-
4
0
0
 
f
o
n
t
-
b
o
l
d
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
k
i
p
p
e
d
:
 
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
4
0
0
"
,


 
 
 
 
 
 
 
 
 
 
 
 
}
;


 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
r
 
k
e
y
=
{
i
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
b
o
r
d
e
r
-
t
 
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
1
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
5
 
$
{
s
 
=
=
=
 
"
e
x
a
m
i
n
i
n
g
"
 
?
 
"
b
g
-
a
m
b
e
r
-
5
0
 
d
a
r
k
:
b
g
-
a
m
b
e
r
-
4
0
0
/
5
"
 
:
 
s
 
=
=
=
 
"
r
e
l
a
x
e
d
"
 
?
 
"
b
g
-
l
i
m
e
-
5
0
 
d
a
r
k
:
b
g
-
l
i
m
e
-
4
0
0
/
5
"
 
:
 
"
"
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
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
p
x
-
3
 
p
y
-
1
.
5
 
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
"
>
{
i
 
+
 
1
}
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
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
p
x
-
3
 
p
y
-
1
.
5
 
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
7
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
3
0
0
"
>
{
e
.
f
r
o
m
}
→
{
e
.
t
o
}
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
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
p
x
-
3
 
p
y
-
1
.
5
 
$
{
e
.
w
 
<
 
0
 
?
 
"
t
e
x
t
-
r
o
s
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
r
o
s
e
-
4
0
0
"
 
:
 
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
"
}
`
}
>
{
e
.
w
}
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
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
p
x
-
3
 
p
y
-
1
.
5
 
$
{
c
o
l
o
r
s
[
s
]
}
`
}
>
{
s
}
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
<
/
t
b
o
d
y
>


 
 
 
 
 
 
<
/
t
a
b
l
e
>


 
 
 
 
<
/
d
i
v
>


 
 
)
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
 
 
V
i
s
u
a
l
i
z
e
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




f
u
n
c
t
i
o
n
 
V
i
s
u
a
l
i
z
e
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
[
i
n
p
u
t
S
t
r
,
 
s
e
t
I
n
p
u
t
S
t
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
(
"
A
>
B
:
6
,
 
A
>
C
:
7
,
 
B
>
C
:
8
,
 
B
>
D
:
5
,
 
B
>
E
:
-
4
,
 
C
>
D
:
-
3
,
 
C
>
E
:
9
,
 
D
>
B
:
-
2
,
 
E
>
D
:
7
,
 
E
>
A
:
2
"
)
;


 
 
c
o
n
s
t
 
[
s
o
u
r
c
e
,
 
s
e
t
S
o
u
r
c
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
"
A
"
)
;


 
 
c
o
n
s
t
 
p
a
r
s
e
d
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
p
a
r
s
e
B
F
(
i
n
p
u
t
S
t
r
)
,
 
[
i
n
p
u
t
S
t
r
]
)
;


 
 
c
o
n
s
t
 
i
d
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
p
a
r
s
e
d
?
.
i
d
s
 
?
?
 
[
]
,
 
[
p
a
r
s
e
d
?
.
i
d
s
]
)
;


 
 
c
o
n
s
t
 
e
d
g
e
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
p
a
r
s
e
d
?
.
e
d
g
e
s
 
?
?
 
[
]
,
 
[
p
a
r
s
e
d
?
.
e
d
g
e
s
]
)
;




 
 
c
o
n
s
t
 
f
r
a
m
e
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
b
u
i
l
d
B
F
F
r
a
m
e
s
(
i
d
s
,
 
e
d
g
e
s
,
 
s
o
u
r
c
e
)
,
 
[
i
d
s
,
 
e
d
g
e
s
,
 
s
o
u
r
c
e
]
)
;


 
 
c
o
n
s
t
 
p
l
a
y
e
r
 
=
 
u
s
e
S
t
e
p
P
l
a
y
e
r
(
f
r
a
m
e
s
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
 
=
 
p
l
a
y
e
r
.
c
u
r
r
e
n
t
;


 
 
c
o
n
s
t
 
p
o
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
a
u
t
o
L
a
y
o
u
t
(
i
d
s
)
,
 
[
i
d
s
]
)
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
A
l
g
o
C
a
n
v
a
s


 
 
 
 
 
 
t
i
t
l
e
=
{
`
B
e
l
l
m
a
n
-
F
o
r
d
 
f
r
o
m
 
$
{
s
o
u
r
c
e
}
 
(
p
a
s
s
 
$
{
f
r
a
m
e
?
.
p
a
s
s
 
?
?
 
0
}
 
/
 
$
{
f
r
a
m
e
?
.
t
o
t
a
l
P
a
s
s
e
s
 
?
?
 
0
}
)
`
}


 
 
 
 
 
 
p
l
a
y
e
r
=
{
p
l
a
y
e
r
}


 
 
 
 
 
 
i
n
p
u
t
=
{


 
 
 
 
 
 
 
 
<
d
i
v
 
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
f
l
e
x
 
g
a
p
-
3
 
f
l
e
x
-
w
r
a
p
 
i
t
e
m
s
-
e
n
d
"
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
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
f
l
e
x
-
1
 
m
i
n
-
w
-
6
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
I
n
p
u
t
E
d
i
t
o
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
D
i
r
e
c
t
e
d
 
w
e
i
g
h
t
e
d
 
e
d
g
e
s
 
(
A
>
B
:
w
,
 
n
e
g
a
t
i
v
e
 
a
l
l
o
w
e
d
)
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
i
n
p
u
t
S
t
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
A
>
B
:
6
,
 
B
>
C
:
-
2
,
 
.
.
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
U
s
e
 
'
>
'
 
f
o
r
 
d
i
r
e
c
t
e
d
.
 
N
e
g
a
t
i
v
e
 
w
e
i
g
h
t
s
 
a
l
l
o
w
e
d
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
{
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
C
l
a
s
s
i
c
 
C
L
R
S
"
,
 
v
a
l
u
e
:
 
"
A
>
B
:
6
,
 
A
>
C
:
7
,
 
B
>
C
:
8
,
 
B
>
D
:
5
,
 
B
>
E
:
-
4
,
 
C
>
D
:
-
3
,
 
C
>
E
:
9
,
 
D
>
B
:
-
2
,
 
E
>
D
:
7
,
 
E
>
A
:
2
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
S
i
m
p
l
e
 
n
e
g
"
,
 
v
a
l
u
e
:
 
"
A
>
B
:
4
,
 
A
>
C
:
5
,
 
B
>
C
:
-
3
,
 
C
>
D
:
2
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
N
e
g
 
c
y
c
l
e
"
,
 
v
a
l
u
e
:
 
"
A
>
B
:
1
,
 
B
>
C
:
-
1
,
 
C
>
A
:
-
1
,
 
A
>
D
:
2
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
N
o
 
c
y
c
l
e
"
,
 
v
a
l
u
e
:
 
"
A
>
B
:
1
,
 
B
>
C
:
2
,
 
C
>
D
:
-
5
,
 
A
>
D
:
1
0
0
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
]
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
A
p
p
l
y
=
{
(
v
)
 
=
>
 
{
 
i
f
 
(
p
a
r
s
e
B
F
(
v
)
)
 
s
e
t
I
n
p
u
t
S
t
r
(
v
)
;
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
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
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
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
t
e
x
t
-
[
1
0
p
x
]
 
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
s
t
 
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
5
0
0
"
>
/
 
s
o
u
r
c
e
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
e
l
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
o
u
r
c
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
S
o
u
r
c
e
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
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
"
p
x
-
3
 
p
y
-
1
.
5
 
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
 
b
o
r
d
e
r
 
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
3
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
 
b
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
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
9
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
1
0
0
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
s
m
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
<
o
p
t
i
o
n
 
k
e
y
=
{
i
d
}
 
v
a
l
u
e
=
{
i
d
}
>
{
i
d
}
<
/
o
p
t
i
o
n
>
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
e
l
e
c
t
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
}


 
 
 
 
 
 
p
s
e
u
d
o
c
o
d
e
=
{
<
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
 
l
i
n
e
s
=
{
P
S
E
U
D
O
}
 
a
c
t
i
v
e
L
i
n
e
=
{
f
r
a
m
e
?
.
l
i
n
e
}
 
/
>
}


 
 
 
 
 
 
v
a
r
i
a
b
l
e
s
=
{
<
V
a
r
i
a
b
l
e
s
P
a
n
e
l
 
v
a
r
s
=
{
f
r
a
m
e
?
.
v
a
r
s
 
?
?
 
{
}
}
 
f
l
a
s
h
K
e
y
s
=
{
f
r
a
m
e
?
.
f
l
a
s
h
K
e
y
 
?
 
[
"
d
[
v
]
"
]
 
:
 
[
]
}
 
/
>
}


 
 
 
 
>


 
 
 
 
 
 
<
d
i
v
 
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
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
<
G
r
a
p
h
S
V
G
 
i
d
s
=
{
i
d
s
}
 
e
d
g
e
s
=
{
e
d
g
e
s
}
 
p
o
s
=
{
p
o
s
}
 
f
r
a
m
e
=
{
f
r
a
m
e
}
 
/
>
}


 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
e
d
g
e
s
.
l
e
n
g
t
h
 
<
=
 
1
2
 
&
&
 
<
E
d
g
e
T
a
b
l
e
 
e
d
g
e
s
=
{
e
d
g
e
s
}
 
r
o
w
S
t
a
t
e
s
=
{
f
r
a
m
e
.
e
d
g
e
R
o
w
S
t
a
t
e
s
}
 
/
>
}


 
 
 
 
 
 
 
 
<
d
i
v
 
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
f
l
e
x
 
g
a
p
-
2
 
f
l
e
x
-
w
r
a
p
 
t
e
x
t
-
x
s
 
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
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
{
[
[
"
#
f
5
9
e
0
b
"
,
 
"
e
x
a
m
i
n
i
n
g
 
e
d
g
e
"
]
,
 
[
"
#
f
b
b
f
2
4
"
,
 
"
j
u
s
t
 
r
e
l
a
x
e
d
"
]
,
 
[
"
#
e
f
4
4
4
4
"
,
 
"
n
e
g
a
t
i
v
e
 
c
y
c
l
e
"
]
]
.
m
a
p
(
(
[
c
,
 
l
]
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
k
e
y
=
{
l
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
"
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
i
n
l
i
n
e
-
b
l
o
c
k
 
w
-
2
.
5
 
h
-
2
.
5
 
r
o
u
n
d
e
d
-
s
m
"
 
s
t
y
l
e
=
{
{
 
b
a
c
k
g
r
o
u
n
d
:
 
c
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
t
 
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
w
-
f
u
l
l
"
>
{
f
r
a
m
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
?
 
"
P
r
e
s
s
 
p
l
a
y
 
t
o
 
r
u
n
 
B
e
l
l
m
a
n
-
F
o
r
d
.
"
}
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
 
 
{
f
r
a
m
e
?
.
n
e
g
C
y
c
l
e
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
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
m
t
-
1
 
p
x
-
4
 
p
y
-
2
.
5
 
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
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
r
o
s
e
-
5
0
0
 
b
g
-
r
o
s
e
-
5
0
 
d
a
r
k
:
b
g
-
r
o
s
e
-
5
0
0
/
1
0
 
t
e
x
t
-
r
o
s
e
-
8
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
o
s
e
-
2
0
0
 
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
b
o
l
d
 
t
e
x
t
-
c
e
n
t
e
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
N
E
G
A
T
I
V
E
 
C
Y
C
L
E
 
D
E
T
E
C
T
E
D
,
 
s
h
o
r
t
e
s
t
 
p
a
t
h
s
 
a
r
e
 
u
n
d
e
f
i
n
e
d
 
f
o
r
 
v
e
r
t
i
c
e
s
 
r
e
a
c
h
a
b
l
e
 
f
r
o
m
 
t
h
e
 
c
y
c
l
e
.


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
A
l
g
o
C
a
n
v
a
s
>


 
 
)
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
 
 
L
e
a
r
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




f
u
n
c
t
i
o
n
 
L
e
a
r
n
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
s
e
c
t
i
o
n
s
 
=
 
[


 
 
 
 
{
 
t
i
t
l
e
:
 
"
W
h
y
 
n
o
t
 
j
u
s
t
 
D
i
j
k
s
t
r
a
?
"
,
 
b
o
d
y
:
 
"
D
i
j
k
s
t
r
a
 
f
a
i
l
s
 
o
n
 
n
e
g
a
t
i
v
e
-
w
e
i
g
h
t
 
e
d
g
e
s
.
 
B
e
l
l
m
a
n
-
F
o
r
d
 
w
o
r
k
s
 
f
o
r
 
a
n
y
 
w
e
i
g
h
t
s
,
 
i
n
c
l
u
d
i
n
g
 
n
e
g
a
t
i
v
e
,
 
a
n
d
 
e
v
e
n
 
d
e
t
e
c
t
s
 
n
e
g
a
t
i
v
e
-
w
e
i
g
h
t
 
c
y
c
l
e
s
 
r
e
a
c
h
a
b
l
e
 
f
r
o
m
 
t
h
e
 
s
o
u
r
c
e
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
T
h
e
 
V
−
1
 
t
r
i
c
k
"
,
 
b
o
d
y
:
 
"
A
n
y
 
s
h
o
r
t
e
s
t
 
p
a
t
h
 
h
a
s
 
a
t
 
m
o
s
t
 
V
−
1
 
e
d
g
e
s
 
(
o
t
h
e
r
w
i
s
e
 
i
t
 
v
i
s
i
t
s
 
a
 
v
e
r
t
e
x
 
t
w
i
c
e
,
 
w
h
i
c
h
 
c
a
n
 
b
e
 
s
h
o
r
t
e
n
e
d
 
u
n
l
e
s
s
 
t
h
e
r
e
'
s
 
a
 
n
e
g
a
t
i
v
e
 
c
y
c
l
e
)
.
 
S
o
 
V
−
1
 
r
e
l
a
x
a
t
i
o
n
 
p
a
s
s
e
s
 
a
r
e
 
e
n
o
u
g
h
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
R
e
l
a
x
a
t
i
o
n
 
p
a
s
s
"
,
 
b
o
d
y
:
 
"
I
n
 
e
a
c
h
 
p
a
s
s
,
 
e
x
a
m
i
n
e
 
e
v
e
r
y
 
e
d
g
e
 
o
n
c
e
.
 
E
a
c
h
 
p
a
s
s
 
e
x
t
e
n
d
s
 
t
h
e
 
d
i
s
t
a
n
c
e
 
o
f
 
s
h
o
r
t
e
s
t
 
p
a
t
h
s
 
b
y
 
a
t
 
l
e
a
s
t
 
o
n
e
 
m
o
r
e
 
e
d
g
e
.
 
S
l
o
w
 
b
u
t
 
e
x
h
a
u
s
t
i
v
e
,
 
O
(
V
·
E
)
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
N
e
g
a
t
i
v
e
-
c
y
c
l
e
 
d
e
t
e
c
t
i
o
n
"
,
 
b
o
d
y
:
 
"
A
f
t
e
r
 
V
−
1
 
p
a
s
s
e
s
,
 
d
i
s
t
a
n
c
e
s
 
a
r
e
 
f
i
n
a
l
,
 
u
n
l
e
s
s
 
a
 
n
e
g
a
t
i
v
e
 
c
y
c
l
e
 
l
e
t
s
 
u
s
 
k
e
e
p
 
i
m
p
r
o
v
i
n
g
.
 
A
 
V
-
t
h
 
p
a
s
s
 
t
h
a
t
 
s
t
i
l
l
 
r
e
l
a
x
e
s
 
a
n
y
 
e
d
g
e
 
p
r
o
v
e
s
 
a
 
n
e
g
a
t
i
v
e
 
c
y
c
l
e
 
e
x
i
s
t
s
.
"
 
}
,


 
 
]
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
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
5
"
>


 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>
m
e
n
t
a
l
 
m
o
d
e
l
<
/
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
T
i
t
l
e
>
B
r
u
t
e
 
f
o
r
c
e
 
e
v
e
r
y
 
e
d
g
e
 
V
−
1
 
t
i
m
e
s
.
 
S
u
r
v
i
v
e
 
n
e
g
a
t
i
v
e
s
.
<
/
S
e
c
t
i
o
n
T
i
t
l
e
>


 
 
 
 
 
 
 
 
<
L
e
d
e
>


 
 
 
 
 
 
 
 
 
 
I
n
s
t
e
a
d
 
o
f
 
b
e
i
n
g
 
c
l
e
v
e
r
 
a
b
o
u
t
 
w
h
i
c
h
 
v
e
r
t
e
x
 
t
o
 
r
e
l
a
x
 
n
e
x
t
 
(
D
i
j
k
s
t
r
a
)
,
 
B
e
l
l
m
a
n
-
F
o
r
d
 
j
u
s
t


 
 
 
 
 
 
 
 
 
 
s
w
e
e
p
s
 
a
l
l
 
e
d
g
e
s
 
V
−
1
 
t
i
m
e
s
.
 
B
r
u
t
e
 
f
o
r
c
e
,
 
b
u
t
 
i
t
 
h
a
n
d
l
e
s
 
e
v
e
r
y
 
w
e
i
g
h
t
 
s
i
g
n
 
a
n
d
 
d
e
t
e
c
t
s


 
 
 
 
 
 
 
 
 
 
c
u
r
r
e
n
c
y
-
a
r
b
i
t
r
a
g
e
-
s
t
y
l
e
 
c
y
c
l
e
s
.


 
 
 
 
 
 
 
 
<
/
L
e
d
e
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
d
i
v
 
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
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
1
 
s
m
:
g
r
i
d
-
c
o
l
s
-
2
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
{
s
e
c
t
i
o
n
s
.
m
a
p
(
(
s
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
C
a
r
d
 
k
e
y
=
{
i
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
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
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
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
s
t
 
t
e
x
t
-
l
i
m
e
-
7
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
l
i
m
e
-
4
0
0
 
m
b
-
2
"
>
0
{
i
 
+
 
1
}
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
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
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
s
m
 
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
9
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
5
0
 
m
b
-
1
"
>
{
s
.
t
i
t
l
e
}
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
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
t
e
x
t
-
s
m
 
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
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>
{
s
.
b
o
d
y
}
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
d
i
v
>


 
 
)
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
 
 
T
r
y
 
I
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




f
u
n
c
t
i
o
n
 
T
r
y
T
a
b
(
)
 
{


 
 
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
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
3
"
>


 
 
 
 
 
 
<
C
a
l
l
o
u
t
>
T
r
y
 
t
h
e
 
"
N
e
g
 
c
y
c
l
e
"
 
p
r
e
s
e
t
,
 
t
h
e
 
a
l
g
o
r
i
t
h
m
 
w
i
l
l
 
r
e
p
o
r
t
 
i
t
 
o
n
 
t
h
e
 
f
i
n
a
l
 
p
a
s
s
.
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
"
C
o
m
p
l
e
x
i
t
y
 
o
f
 
B
e
l
l
m
a
n
-
F
o
r
d
?
 
(
E
x
p
e
c
t
e
d
:
 
O
(
V
·
E
)
)
"
,


 
 
 
 
 
 
 
 
"
O
n
 
t
h
e
 
'
N
o
 
c
y
c
l
e
'
 
p
r
e
s
e
t
 
f
r
o
m
 
A
,
 
w
h
a
t
'
s
 
d
i
s
t
[
D
]
?
 
(
E
x
p
e
c
t
e
d
:
 
-
2
,
 
v
i
a
 
A
→
B
→
C
→
D
 
=
 
1
+
2
-
5
)
"
,


 
 
 
 
 
 
 
 
"
I
f
 
a
 
n
e
g
a
t
i
v
e
 
c
y
c
l
e
 
i
s
 
r
e
a
c
h
a
b
l
e
,
 
w
h
a
t
 
d
o
 
w
e
 
s
a
y
 
a
b
o
u
t
 
s
h
o
r
t
e
s
t
 
p
a
t
h
s
 
t
o
 
n
o
d
e
s
 
p
a
s
t
 
i
t
?
 
(
E
x
p
e
c
t
e
d
:
 
u
n
d
e
f
i
n
e
d
 
/
 
-
∞
)
"
,


 
 
 
 
 
 
]
.
m
a
p
(
(
q
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
<
C
a
r
d
 
k
e
y
=
{
i
}
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
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
t
e
x
t
-
s
m
 
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
8
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
2
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
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
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
l
i
m
e
-
7
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
l
i
m
e
-
4
0
0
"
>
#
{
i
 
+
 
1
}
<
/
s
p
a
n
>
 
{
q
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
)
)
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
 
 
I
n
s
i
g
h
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




f
u
n
c
t
i
o
n
 
I
n
s
i
g
h
t
T
a
b
(
)
 
{


 
 
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
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
4
"
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
W
h
e
n
 
t
o
 
u
s
e
 
B
e
l
l
m
a
n
-
F
o
r
d
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
u
l
 
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
l
i
s
t
-
d
i
s
c
 
p
l
-
5
 
s
p
a
c
e
-
y
-
1
.
5
 
t
e
x
t
-
s
m
 
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
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
C
u
r
r
e
n
c
y
 
a
r
b
i
t
r
a
g
e
 
d
e
t
e
c
t
i
o
n
 
(
n
e
g
a
t
i
v
e
 
l
o
g
-
w
e
i
g
h
t
s
)
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
D
i
s
t
a
n
c
e
-
v
e
c
t
o
r
 
r
o
u
t
i
n
g
 
p
r
o
t
o
c
o
l
s
 
(
R
I
P
)
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
P
r
e
p
r
o
c
e
s
s
i
n
g
 
f
o
r
 
J
o
h
n
s
o
n
'
s
 
a
l
l
-
p
a
i
r
s
 
s
h
o
r
t
e
s
t
 
p
a
t
h
s
.
<
/
l
i
>


 
 
 
 
 
 
 
 
<
/
u
l
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
E
d
g
e
 
o
r
d
e
r
 
m
a
t
t
e
r
s
 
(
f
o
r
 
s
p
e
e
d
)
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
p
 
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
t
e
x
t
-
s
m
 
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
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
A
 
l
u
c
k
y
 
e
d
g
e
 
o
r
d
e
r
i
n
g
 
c
a
n
 
c
o
n
v
e
r
g
e
 
i
n
 
f
a
r
 
f
e
w
e
r
 
t
h
a
n
 
V
−
1
 
p
a
s
s
e
s
.
 
O
r
d
e
r
i
n
g
 
b
y
 
t
o
p
o
l
o
g
i
c
a
l


 
 
 
 
 
 
 
 
 
 
s
o
r
t
 
o
r
d
e
r
 
o
n
 
a
 
D
A
G
 
f
i
n
i
s
h
e
s
 
i
n
 
o
n
e
 
p
a
s
s
,
 
t
h
e
 
b
a
s
i
s
 
o
f
 
t
h
e
 
O
(
V
+
E
)
 
D
A
G
 
s
h
o
r
t
e
s
t
-
p
a
t
h


 
 
 
 
 
 
 
 
 
 
a
l
g
o
r
i
t
h
m
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
<
/
d
i
v
>


 
 
)
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




i
n
t
e
r
f
a
c
e
 
P
r
o
p
s
 
{


 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
?
:
 
(
s
c
o
r
e
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
 
v
o
i
d
;


}




e
x
p
o
r
t
 
d
e
f
a
u
l
t
 
f
u
n
c
t
i
o
n
 
L
4
_
B
e
l
l
m
a
n
F
o
r
d
(
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
 
}
:
 
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
 
t
a
b
s
:
 
L
e
s
s
o
n
T
a
b
D
e
f
[
]
 
=
 
[


 
 
 
 
{
 
i
d
:
 
"
l
e
a
r
n
"
,
 
l
a
b
e
l
:
 
"
L
e
a
r
n
"
,
 
i
c
o
n
:
 
<
B
o
o
k
O
p
e
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
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
L
e
a
r
n
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
v
i
s
u
a
l
i
z
e
"
,
 
l
a
b
e
l
:
 
"
V
i
s
u
a
l
i
z
e
"
,
 
i
c
o
n
:
 
<
P
l
a
y
 
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
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
V
i
s
u
a
l
i
z
e
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
t
r
y
"
,
 
l
a
b
e
l
:
 
"
T
r
y
 
I
t
"
,
 
i
c
o
n
:
 
<
T
a
r
g
e
t
 
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
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
T
r
y
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
i
n
s
i
g
h
t
"
,
 
l
a
b
e
l
:
 
"
I
n
s
i
g
h
t
"
,
 
i
c
o
n
:
 
<
L
i
g
h
t
b
u
l
b
 
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
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
I
n
s
i
g
h
t
T
a
b
 
/
>
 
}
,


 
 
]
;




 
 
c
o
n
s
t
 
q
u
i
z
:
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
[
]
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
T
i
m
e
 
c
o
m
p
l
e
x
i
t
y
 
o
f
 
B
e
l
l
m
a
n
-
F
o
r
d
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
O
(
V
 
+
 
E
)
"
,
 
"
O
(
V
 
l
o
g
 
V
)
"
,
 
"
O
(
V
 
·
 
E
)
"
,
 
"
O
(
E
 
l
o
g
 
V
)
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:


 
 
 
 
 
 
 
 
"
V
−
1
 
p
a
s
s
e
s
 
×
 
O
(
E
)
 
p
e
r
 
p
a
s
s
 
=
 
O
(
V
·
E
)
.
 
M
u
c
h
 
s
l
o
w
e
r
 
t
h
a
n
 
D
i
j
k
s
t
r
a
,
 
b
u
t
 
h
a
n
d
l
e
s
 
n
e
g
a
t
i
v
e
 
w
e
i
g
h
t
s
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
A
f
t
e
r
 
V
−
1
 
p
a
s
s
e
s
,
 
i
f
 
a
 
V
-
t
h
 
p
a
s
s
 
s
t
i
l
l
 
r
e
l
a
x
e
s
 
s
o
m
e
 
e
d
g
e
,
 
w
e
 
c
o
n
c
l
u
d
e
…
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
A
l
g
o
r
i
t
h
m
 
h
a
s
 
a
 
b
u
g
"
,


 
 
 
 
 
 
 
 
"
G
r
a
p
h
 
i
s
 
d
i
s
c
o
n
n
e
c
t
e
d
"
,


 
 
 
 
 
 
 
 
"
A
 
n
e
g
a
t
i
v
e
 
c
y
c
l
e
 
i
s
 
r
e
a
c
h
a
b
l
e
 
f
r
o
m
 
t
h
e
 
s
o
u
r
c
e
"
,


 
 
 
 
 
 
 
 
"
R
u
n
 
m
o
r
e
 
p
a
s
s
e
s
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:


 
 
 
 
 
 
 
 
"
V
−
1
 
p
a
s
s
e
s
 
s
u
f
f
i
c
e
 
f
o
r
 
a
n
y
 
a
c
y
c
l
i
c
 
s
h
o
r
t
e
s
t
 
p
a
t
h
.
 
F
u
r
t
h
e
r
 
i
m
p
r
o
v
e
m
e
n
t
 
i
m
p
l
i
e
s
 
a
 
c
y
c
l
e
 
w
h
o
s
e
 
t
o
t
a
l
 
w
e
i
g
h
t
 
i
s
 
n
e
g
a
t
i
v
e
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
y
 
d
o
e
s
 
D
i
j
k
s
t
r
a
 
f
a
i
l
 
w
i
t
h
 
n
e
g
a
t
i
v
e
 
w
e
i
g
h
t
s
 
b
u
t
 
B
e
l
l
m
a
n
-
F
o
r
d
 
s
u
c
c
e
e
d
s
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
D
i
j
k
s
t
r
a
 
i
s
 
b
u
g
g
y
"
,


 
 
 
 
 
 
 
 
"
B
e
l
l
m
a
n
-
F
o
r
d
 
t
r
i
e
s
 
a
l
l
 
e
d
g
e
s
 
i
n
 
e
v
e
r
y
 
p
a
s
s
;
 
D
i
j
k
s
t
r
a
 
c
o
m
m
i
t
s
 
t
o
 
a
 
m
i
n
 
t
o
o
 
e
a
r
l
y
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
 
b
o
t
h
 
s
u
c
c
e
e
d
"
,


 
 
 
 
 
 
 
 
"
D
i
j
k
s
t
r
a
 
i
s
 
o
n
l
y
 
f
o
r
 
D
A
G
s
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:


 
 
 
 
 
 
 
 
"
D
i
j
k
s
t
r
a
 
f
i
n
a
l
i
z
e
s
 
v
e
r
t
i
c
e
s
 
g
r
e
e
d
i
l
y
.
 
A
 
l
a
t
e
r
 
n
e
g
a
t
i
v
e
 
e
d
g
e
 
c
o
u
l
d
 
h
a
v
e
 
i
m
p
r
o
v
e
d
 
a
n
 
a
l
r
e
a
d
y
-
f
i
n
a
l
i
z
e
d
 
d
i
s
t
a
n
c
e
.
 
B
e
l
l
m
a
n
-
F
o
r
d
 
n
e
v
e
r
 
f
i
n
a
l
i
z
e
s
 
e
a
r
l
y
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
I
f
 
n
o
 
n
e
g
a
t
i
v
e
 
c
y
c
l
e
 
e
x
i
s
t
s
,
 
h
o
w
 
m
a
n
y
 
p
a
s
s
e
s
 
a
r
e
 
s
u
f
f
i
c
i
e
n
t
 
i
n
 
t
h
e
 
w
o
r
s
t
 
c
a
s
e
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
l
o
g
 
V
"
,
 
"
V
 
−
 
1
"
,
 
"
V
"
,
 
"
E
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:


 
 
 
 
 
 
 
 
"
A
 
s
i
m
p
l
e
 
s
h
o
r
t
e
s
t
 
p
a
t
h
 
h
a
s
 
a
t
 
m
o
s
t
 
V
−
1
 
e
d
g
e
s
.
 
O
n
e
 
p
a
s
s
 
e
x
t
e
n
d
s
 
c
o
r
r
e
c
t
 
d
i
s
t
a
n
c
e
s
 
b
y
 
o
n
e
 
e
d
g
e
;
 
V
−
1
 
p
a
s
s
e
s
 
s
u
f
f
i
c
e
.
"
,


 
 
 
 
}
,


 
 
]
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
L
e
s
s
o
n
S
h
e
l
l


 
 
 
 
 
 
t
i
t
l
e
=
"
B
e
l
l
m
a
n
-
F
o
r
d
"


 
 
 
 
 
 
l
e
v
e
l
=
{
4
}


 
 
 
 
 
 
l
e
s
s
o
n
N
u
m
b
e
r
=
{
6
}


 
 
 
 
 
 
t
a
b
s
=
{
t
a
b
s
}


 
 
 
 
 
 
q
u
i
z
=
{
q
u
i
z
}


 
 
 
 
 
 
p
l
a
c
e
m
e
n
t
R
e
l
e
v
a
n
c
e
=
"
M
e
d
i
u
m
,
 
a
r
b
i
t
r
a
g
e
,
 
r
o
u
t
i
n
g
 
p
r
o
t
o
c
o
l
s
.
"


 
 
 
 
 
 
n
e
x
t
L
e
s
s
o
n
H
i
n
t
=
"
M
i
n
i
m
u
m
 
S
p
a
n
n
i
n
g
 
T
r
e
e
s
"


 
 
 
 
 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
=
{
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
}


 
 
 
 
/
>


 
 
)
;


}


