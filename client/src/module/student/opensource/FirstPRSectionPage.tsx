
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
 
{
 
u
s
e
P
a
r
a
m
s
,
 
L
i
n
k
,
 
N
a
v
i
g
a
t
e
,
 
u
s
e
N
a
v
i
g
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
-
r
o
u
t
e
r
"
;


i
m
p
o
r
t
 
{
 
m
o
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
f
r
a
m
e
r
-
m
o
t
i
o
n
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
r
r
o
w
R
i
g
h
t
,


 
 
C
h
e
v
r
o
n
L
e
f
t
,


 
 
C
h
e
v
r
o
n
R
i
g
h
t
,


 
 
C
h
e
c
k
C
i
r
c
l
e
2
,


 
 
E
x
t
e
r
n
a
l
L
i
n
k
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


 
 
I
n
f
o
,


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
 
S
E
O
 
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
S
E
O
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
u
t
t
o
n
 
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
u
i
/
b
u
t
t
o
n
"
;


i
m
p
o
r
t
 
t
o
a
s
t
 
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
u
i
/
t
o
a
s
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
 
c
a
n
o
n
i
c
a
l
U
r
l
 
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
l
i
b
/
s
e
o
.
u
t
i
l
s
"
;


i
m
p
o
r
t
 
{


 
 
f
e
t
c
h
F
i
r
s
t
P
R
P
r
o
g
r
e
s
s
,


 
 
p
a
t
c
h
F
i
r
s
t
P
R
P
r
o
g
r
e
s
s
,


}
 
f
r
o
m
 
"
.
/
a
p
i
/
o
p
e
n
s
o
u
r
c
e
.
a
p
i
"
;


i
m
p
o
r
t
 
g
u
i
d
e
D
a
t
a
 
f
r
o
m
 
"
.
/
d
a
t
a
/
o
p
e
n
-
s
o
u
r
c
e
-
g
u
i
d
e
.
j
s
o
n
"
;


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
K
e
y
b
o
a
r
d
N
a
v
i
g
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
.
/
.
.
/
.
.
/
h
o
o
k
s
/
u
s
e
K
e
y
b
o
a
r
d
N
a
v
i
g
a
t
i
o
n
"
;


i
m
p
o
r
t
 
{
 
R
e
a
d
i
n
g
P
r
o
g
r
e
s
s
B
a
r
 
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
R
e
a
d
i
n
g
P
r
o
g
r
e
s
s
B
a
r
"
;


i
m
p
o
r
t
 
{
 
n
o
t
i
f
y
L
e
a
r
n
i
n
g
P
a
t
h
P
r
o
g
r
e
s
s
C
h
a
n
g
e
d
 
}
 
f
r
o
m
 
"
.
/
l
e
a
r
n
i
n
g
-
p
a
t
h
s
.
d
a
t
a
"
;




/
/
 
─
─
─
 
T
y
p
e
s
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─


i
n
t
e
r
f
a
c
e
 
R
e
s
o
u
r
c
e
 
{


 
 
t
i
t
l
e
:
 
s
t
r
i
n
g
;


 
 
u
r
l
:
 
s
t
r
i
n
g
;


 
 
t
y
p
e
:
 
s
t
r
i
n
g
;


}


i
n
t
e
r
f
a
c
e
 
C
o
m
m
a
n
d
 
{


 
 
l
a
b
e
l
:
 
s
t
r
i
n
g
;


 
 
c
o
d
e
:
 
s
t
r
i
n
g
;


}


i
n
t
e
r
f
a
c
e
 
S
t
e
p
 
{


 
 
s
t
e
p
:
 
n
u
m
b
e
r
;


 
 
i
d
:
 
s
t
r
i
n
g
;


 
 
t
i
t
l
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
e
s
c
r
i
p
t
i
o
n
:
 
s
t
r
i
n
g
;


 
 
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
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


 
 
m
e
n
t
o
r
_
g
u
i
d
a
n
c
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
e
t
a
i
l
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


 
 
c
o
m
m
a
n
d
s
:
 
C
o
m
m
a
n
d
[
]
;


 
 
r
e
s
o
u
r
c
e
s
:
 
R
e
s
o
u
r
c
e
[
]
;


 
 
t
i
p
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


}




f
u
n
c
t
i
o
n
 
C
o
m
m
a
n
d
B
l
o
c
k
(
{
 
l
a
b
e
l
,
 
c
o
d
e
 
}
:
 
C
o
m
m
a
n
d
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
h
i
d
d
e
n
 
r
o
u
n
d
e
d
-
2
x
l
 
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
g
r
a
y
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
g
r
a
y
-
8
0
0
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
0
0
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
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
g
a
p
-
3
 
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
g
r
a
y
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
g
r
a
y
-
8
0
0
 
b
g
-
g
r
a
y
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
g
r
a
y
-
9
5
0
/
4
0
 
p
x
-
4
 
p
y
-
3
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
s
t
 
t
e
x
t
-
g
r
a
y
-
5
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
g
r
a
y
-
4
0
0
 
t
r
u
n
c
a
t
e
"
>


 
 
 
 
 
 
 
 
 
 
{
l
a
b
e
l
}


 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
p
r
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
 
b
g
-
g
r
a
y
-
9
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
b
l
a
c
k
 
p
x
-
4
 
p
y
-
4
 
t
e
x
t
-
x
s
 
s
m
:
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
o
n
o
 
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
 
t
e
x
t
-
g
r
a
y
-
1
0
0
"
>


 
 
 
 
 
 
 
 
<
c
o
d
e
>
{
c
o
d
e
}
<
/
c
o
d
e
>


 
 
 
 
 
 
<
/
p
r
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




c
o
n
s
t
 
S
T
E
P
S
:
 
S
t
e
p
[
]
 
=
 
g
u
i
d
e
D
a
t
a
.
o
p
e
n
S
o
u
r
c
e
R
o
a
d
m
a
p
 
a
s
 
S
t
e
p
[
]
;




/
/
 
─
─
─
 
P
a
g
e
 
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─
─


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
 
F
i
r
s
t
P
R
S
e
c
t
i
o
n
P
a
g
e
(
)
 
{


 
 
c
o
n
s
t
 
{
 
s
e
c
t
i
o
n
S
l
u
g
 
}
 
=
 
u
s
e
P
a
r
a
m
s
<
{
 
s
e
c
t
i
o
n
S
l
u
g
:
 
s
t
r
i
n
g
 
}
>
(
)
;


 
 
c
o
n
s
t
 
n
a
v
i
g
a
t
e
 
=
 
u
s
e
N
a
v
i
g
a
t
e
(
)
;


 
 
c
o
n
s
t
 
s
t
e
p
I
n
d
e
x
 
=
 
S
T
E
P
S
.
f
i
n
d
I
n
d
e
x
(
(
s
)
 
=
>
 
s
.
i
d
 
=
=
=
 
s
e
c
t
i
o
n
S
l
u
g
)
;


 
 
c
o
n
s
t
 
s
t
e
p
 
=
 
S
T
E
P
S
[
s
t
e
p
I
n
d
e
x
]
;




 
 
c
o
n
s
t
 
[
c
o
m
p
l
e
t
e
d
,
 
s
e
t
C
o
m
p
l
e
t
e
d
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
>
(
n
e
w
 
S
e
t
(
)
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
t
r
u
e
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


 
 
 
 
l
e
t
 
i
s
M
o
u
n
t
e
d
 
=
 
t
r
u
e
;




 
 
 
 
f
e
t
c
h
F
i
r
s
t
P
R
P
r
o
g
r
e
s
s
(
)


 
 
 
 
 
 
.
t
h
e
n
(
(
c
o
m
p
l
e
t
e
d
S
t
e
p
I
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
)
 
=
>
 
{


 
 
 
 
 
 
 
 
i
f
 
(
i
s
M
o
u
n
t
e
d
)
 
{


 
 
 
 
 
 
 
 
 
 
s
e
t
C
o
m
p
l
e
t
e
d
(
n
e
w
 
S
e
t
(
c
o
m
p
l
e
t
e
d
S
t
e
p
I
d
s
)
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}
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


 
 
 
 
 
 
 
 
i
f
 
(
i
s
M
o
u
n
t
e
d
)
 
{


 
 
 
 
 
 
 
 
 
 
s
e
t
C
o
m
p
l
e
t
e
d
(
n
e
w
 
S
e
t
(
)
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}
)


 
 
 
 
 
 
.
f
i
n
a
l
l
y
(
(
)
 
=
>
 
{


 
 
 
 
 
 
 
 
i
f
 
(
i
s
M
o
u
n
t
e
d
)
 
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
f
a
l
s
e
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}
)
;




 
 
 
 
r
e
t
u
r
n
 
(
)
 
=
>
 
{


 
 
 
 
 
 
i
s
M
o
u
n
t
e
d
 
=
 
f
a
l
s
e
;


 
 
 
 
}
;


 
 
}
,
 
[
]
)
;




 
 
c
o
n
s
t
 
t
o
g
g
l
e
C
o
m
p
l
e
t
e
 
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
!
s
t
e
p
)
 
r
e
t
u
r
n
;




 
 
 
 
c
o
n
s
t
 
i
s
C
u
r
r
e
n
t
l
y
C
o
m
p
l
e
t
e
d
 
=
 
c
o
m
p
l
e
t
e
d
.
h
a
s
(
s
t
e
p
.
i
d
)
;




 
 
 
 
s
e
t
C
o
m
p
l
e
t
e
d
(
(
p
r
e
v
)
 
=
>
 
{


 
 
 
 
 
 
c
o
n
s
t
 
n
e
x
t
 
=
 
n
e
w
 
S
e
t
(
p
r
e
v
)
;


 
 
 
 
 
 
i
f
 
(
i
s
C
u
r
r
e
n
t
l
y
C
o
m
p
l
e
t
e
d
)
 
n
e
x
t
.
d
e
l
e
t
e
(
s
t
e
p
.
i
d
)
;


 
 
 
 
 
 
e
l
s
e
 
n
e
x
t
.
a
d
d
(
s
t
e
p
.
i
d
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
n
e
x
t
;


 
 
 
 
}
)
;




 
 
 
 
v
o
i
d
 
p
a
t
c
h
F
i
r
s
t
P
R
P
r
o
g
r
e
s
s
(
s
t
e
p
.
i
d
,
 
!
i
s
C
u
r
r
e
n
t
l
y
C
o
m
p
l
e
t
e
d
)


 
 
 
 
 
 
.
t
h
e
n
(
(
)
 
=
>
 
n
o
t
i
f
y
L
e
a
r
n
i
n
g
P
a
t
h
P
r
o
g
r
e
s
s
C
h
a
n
g
e
d
(
)
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


 
 
 
 
 
 
 
 
s
e
t
C
o
m
p
l
e
t
e
d
(
(
p
r
e
v
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
r
o
l
l
e
d
B
a
c
k
 
=
 
n
e
w
 
S
e
t
(
p
r
e
v
)
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
i
s
C
u
r
r
e
n
t
l
y
C
o
m
p
l
e
t
e
d
)
 
r
o
l
l
e
d
B
a
c
k
.
a
d
d
(
s
t
e
p
.
i
d
)
;


 
 
 
 
 
 
 
 
 
 
e
l
s
e
 
r
o
l
l
e
d
B
a
c
k
.
d
e
l
e
t
e
(
s
t
e
p
.
i
d
)
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
r
o
l
l
e
d
B
a
c
k
;


 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
n
o
t
i
f
y
L
e
a
r
n
i
n
g
P
a
t
h
P
r
o
g
r
e
s
s
C
h
a
n
g
e
d
(
)
;


 
 
 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
"
F
a
i
l
e
d
 
t
o
 
u
p
d
a
t
e
 
p
r
o
g
r
e
s
s
.
 
P
l
e
a
s
e
 
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
)
;


 
 
 
 
 
 
}
)
;


 
 
}
,
 
[
c
o
m
p
l
e
t
e
d
,
 
s
t
e
p
]
)
;




 
 
/
/
 
-
-
-
>
 
F
I
X
:
 
D
e
f
i
n
e
 
v
a
r
i
a
b
l
e
s
 
a
n
d
 
c
a
l
l
 
h
o
o
k
 
B
E
F
O
R
E
 
t
h
e
 
e
a
r
l
y
 
r
e
t
u
r
n
 
<
-
-
-


 
 
c
o
n
s
t
 
p
r
e
v
 
=
 
s
t
e
p
I
n
d
e
x
 
>
 
0
 
?
 
S
T
E
P
S
[
s
t
e
p
I
n
d
e
x
 
-
 
1
]
 
:
 
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
e
x
t
 
=
 
s
t
e
p
I
n
d
e
x
 
<
 
S
T
E
P
S
.
l
e
n
g
t
h
 
-
 
1
 
?
 
S
T
E
P
S
[
s
t
e
p
I
n
d
e
x
 
+
 
1
]
 
:
 
n
u
l
l
;




 
 
u
s
e
K
e
y
b
o
a
r
d
N
a
v
i
g
a
t
i
o
n
(
{


 
 
 
 
p
r
e
v
P
a
t
h
:
 
p
r
e
v
 
?
 
`
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
f
i
r
s
t
-
p
r
/
$
{
p
r
e
v
.
i
d
}
`
 
:
 
n
u
l
l
,


 
 
 
 
n
e
x
t
P
a
t
h
:
 
n
e
x
t
 
?
 
`
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
f
i
r
s
t
-
p
r
/
$
{
n
e
x
t
.
i
d
}
`
 
:
 
n
u
l
l
,


 
 
}
)
;




 
 
i
f
 
(
i
s
L
o
a
d
i
n
g
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
r
e
l
a
t
i
v
e
 
p
b
-
1
2
"
>


 
 
 
 
 
 
 
 
<
S
E
O


 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
F
i
r
s
t
 
P
R
 
G
u
i
d
e
 
-
 
O
p
e
n
 
S
o
u
r
c
e
 
f
o
r
 
B
e
g
i
n
n
e
r
s
"


 
 
 
 
 
 
 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
=
{


 
 
 
 
 
 
 
 
 
 
 
 
s
t
e
p
?
.
d
e
s
c
r
i
p
t
i
o
n
 
|
|


 
 
 
 
 
 
 
 
 
 
 
 
"
L
e
a
r
n
 
e
a
c
h
 
s
t
e
p
 
o
f
 
y
o
u
r
 
f
i
r
s
t
 
p
u
l
l
 
r
e
q
u
e
s
t
 
j
o
u
r
n
e
y
.
"


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
c
a
n
o
n
i
c
a
l
U
r
l
=
{
c
a
n
o
n
i
c
a
l
U
r
l
(


 
 
 
 
 
 
 
 
 
 
 
 
`
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
f
i
r
s
t
-
p
r
/
$
{
s
e
c
t
i
o
n
S
l
u
g
}
`
,


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
/
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
i
x
e
d
 
i
n
s
e
t
-
0
 
p
o
i
n
t
e
r
-
e
v
e
n
t
s
-
n
o
n
e
 
-
z
-
1
0
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
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
a
b
s
o
l
u
t
e
 
-
t
o
p
-
3
2
 
-
r
i
g
h
t
-
3
2
 
w
-
1
5
0
 
h
-
1
5
0
 
b
g
-
i
n
d
i
g
o
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
g
-
i
n
d
i
g
o
-
9
0
0
/
2
0
 
r
o
u
n
d
e
d
-
f
u
l
l
 
b
l
u
r
-
3
x
l
 
o
p
a
c
i
t
y
-
4
0
"
 
/
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
a
b
s
o
l
u
t
e
 
-
b
o
t
t
o
m
-
3
2
 
-
l
e
f
t
-
3
2
 
w
-
1
2
5
 
h
-
1
2
5
 
b
g
-
s
l
a
t
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
g
-
s
l
a
t
e
-
9
0
0
/
2
0
 
r
o
u
n
d
e
d
-
f
u
l
l
 
b
l
u
r
-
3
x
l
 
o
p
a
c
i
t
y
-
4
0
"
 
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
m
x
-
a
u
t
o
 
f
l
e
x
 
m
i
n
-
h
-
[
6
0
v
h
]
 
m
a
x
-
w
-
4
x
l
 
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
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
p
x
-
4
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
w
-
f
u
l
l
 
m
a
x
-
w
-
2
x
l
 
s
p
a
c
e
-
y
-
4
 
r
o
u
n
d
e
d
-
2
x
l
 
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
g
r
a
y
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
g
r
a
y
-
8
0
0
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
0
0
 
p
-
6
 
s
h
a
d
o
w
-
s
m
 
a
n
i
m
a
t
e
-
p
u
l
s
e
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
h
-
8
 
w
-
4
0
 
r
o
u
n
d
e
d
-
x
l
 
b
g
-
g
r
a
y
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
g
-
g
r
a
y
-
8
0
0
"
 
/
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
h
-
1
2
 
w
-
f
u
l
l
 
r
o
u
n
d
e
d
-
2
x
l
 
b
g
-
g
r
a
y
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
g
-
g
r
a
y
-
8
0
0
"
 
/
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
2
 
g
a
p
-
3
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
h
-
2
4
 
r
o
u
n
d
e
d
-
2
x
l
 
b
g
-
g
r
a
y
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
g
-
g
r
a
y
-
8
0
0
"
 
/
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
h
-
2
4
 
r
o
u
n
d
e
d
-
2
x
l
 
b
g
-
g
r
a
y
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
g
-
g
r
a
y
-
8
0
0
"
 
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
h
-
4
 
w
-
3
/
4
 
r
o
u
n
d
e
d
-
f
u
l
l
 
b
g
-
g
r
a
y
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
g
-
g
r
a
y
-
8
0
0
"
 
/
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
h
-
4
 
w
-
2
/
3
 
r
o
u
n
d
e
d
-
f
u
l
l
 
b
g
-
g
r
a
y
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
g
-
g
r
a
y
-
8
0
0
"
 
/
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
/
 
-
-
-
>
 
T
h
e
 
g
u
a
r
d
 
i
s
 
n
o
w
 
s
a
f
e
l
y
 
b
e
l
o
w
 
a
l
l
 
h
o
o
k
 
c
a
l
l
s
 
<
-
-
-


 
 
i
f
 
(
!
s
t
e
p
)
 
r
e
t
u
r
n
 
<
N
a
v
i
g
a
t
e
 
t
o
=
"
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
f
i
r
s
t
-
p
r
"
 
r
e
p
l
a
c
e
 
/
>
;




 
 
c
o
n
s
t
 
i
s
D
o
n
e
 
=
 
c
o
m
p
l
e
t
e
d
.
h
a
s
(
s
t
e
p
.
i
d
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
r
e
l
a
t
i
v
e
 
p
b
-
1
2
"
>


 
 
 
 
 
 
<
R
e
a
d
i
n
g
P
r
o
g
r
e
s
s
B
a
r
 
/
>


 
 
 
 
 
 
<
S
E
O


 
 
 
 
 
 
 
 
t
i
t
l
e
=
{
`
$
{
s
t
e
p
.
t
i
t
l
e
}
 
-
 
F
i
r
s
t
 
P
R
 
G
u
i
d
e
`
}


 
 
 
 
 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
=
{


 
 
 
 
 
 
 
 
 
 
s
t
e
p
.
d
e
s
c
r
i
p
t
i
o
n
 
|
|


 
 
 
 
 
 
 
 
 
 
`
L
e
a
r
n
 
$
{
s
t
e
p
.
t
i
t
l
e
}
 
i
n
 
o
u
r
 
s
t
e
p
-
b
y
-
s
t
e
p
 
f
i
r
s
t
 
p
u
l
l
 
r
e
q
u
e
s
t
 
g
u
i
d
e
.
`


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
c
a
n
o
n
i
c
a
l
U
r
l
=
{
c
a
n
o
n
i
c
a
l
U
r
l
(


 
 
 
 
 
 
 
 
 
 
`
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
f
i
r
s
t
-
p
r
/
$
{
s
e
c
t
i
o
n
S
l
u
g
}
`
,


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
/
>




 
 
 
 
 
 
{
/
*
 
A
t
m
o
s
p
h
e
r
i
c
 
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
 
*
/
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
i
x
e
d
 
i
n
s
e
t
-
0
 
p
o
i
n
t
e
r
-
e
v
e
n
t
s
-
n
o
n
e
 
-
z
-
1
0
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
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
a
b
s
o
l
u
t
e
 
-
t
o
p
-
3
2
 
-
r
i
g
h
t
-
3
2
 
w
-
1
5
0
 
h
-
1
5
0
 
b
g
-
i
n
d
i
g
o
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
g
-
i
n
d
i
g
o
-
9
0
0
/
2
0
 
r
o
u
n
d
e
d
-
f
u
l
l
 
b
l
u
r
-
3
x
l
 
o
p
a
c
i
t
y
-
4
0
"
 
/
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
a
b
s
o
l
u
t
e
 
-
b
o
t
t
o
m
-
3
2
 
-
l
e
f
t
-
3
2
 
w
-
1
2
5
 
h
-
1
2
5
 
b
g
-
s
l
a
t
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
g
-
s
l
a
t
e
-
9
0
0
/
2
0
 
r
o
u
n
d
e
d
-
f
u
l
l
 
b
l
u
r
-
3
x
l
 
o
p
a
c
i
t
y
-
4
0
"
 
/
>


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
{
/
*
 
H
e
a
d
e
r
 
*
/
}


 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
2
0
 
}
}


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
5
,
 
e
a
s
e
:
 
[
0
.
2
2
,
 
1
,
 
0
.
3
6
,
 
1
]
 
}
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
m
b
-
6
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
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
0
0
 
r
o
u
n
d
e
d
-
2
x
l
 
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
g
r
a
y
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
g
r
a
y
-
8
0
0
 
p
x
-
6
 
p
y
-
4
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
3
 
m
i
n
-
w
-
0
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
w
-
1
0
 
h
-
1
0
 
r
o
u
n
d
e
d
-
x
l
 
b
g
-
i
n
d
i
g
o
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
i
n
d
i
g
o
-
9
0
0
/
3
0
 
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
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
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
i
n
d
i
g
o
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
i
n
d
i
g
o
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
.
s
t
e
p
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
1
 
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
d
i
s
p
l
a
y
 
t
e
x
t
-
x
l
 
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
g
r
a
y
-
9
5
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
w
h
i
t
e
 
t
r
u
n
c
a
t
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
1
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
.
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
 
&
&
 
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
"
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
 
t
e
x
t
-
g
r
a
y
-
4
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
g
r
a
y
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
~
{
s
t
e
p
.
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
}
 
m
i
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
D
o
n
e
 
&
&
 
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
g
r
e
e
n
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
g
r
e
e
n
-
4
0
0
 
m
t
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
c
k
C
i
r
c
l
e
2
 
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
3
.
5
 
h
-
3
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
o
m
p
l
e
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
d
i
v
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
N
a
v
 
a
r
r
o
w
s
 
*
/
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


 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
g
h
o
s
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
o
d
e
=
"
i
c
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
e
v
 
&
&
 
n
a
v
i
g
a
t
e
(
`
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
f
i
r
s
t
-
p
r
/
$
{
p
r
e
v
.
i
d
}
`
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
!
p
r
e
v
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
g
-
g
r
a
y
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
g
r
a
y
-
8
0
0
 
r
o
u
n
d
e
d
-
x
l
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
P
r
e
v
i
o
u
s
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
L
e
f
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
 
t
e
x
t
-
g
r
a
y
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
g
r
a
y
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
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
g
r
a
y
-
4
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
g
r
a
y
-
5
0
0
 
p
x
-
2
 
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
a
b
u
l
a
r
-
n
u
m
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
.
s
t
e
p
}
 
/
 
{
S
T
E
P
S
.
l
e
n
g
t
h
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
g
h
o
s
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
o
d
e
=
"
i
c
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
n
e
x
t
 
&
&
 
n
a
v
i
g
a
t
e
(
`
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
f
i
r
s
t
-
p
r
/
$
{
n
e
x
t
.
i
d
}
`
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
!
n
e
x
t
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
g
-
g
r
a
y
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
g
r
a
y
-
8
0
0
 
r
o
u
n
d
e
d
-
x
l
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
N
e
x
t
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
v
r
o
n
R
i
g
h
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
 
t
e
x
t
-
g
r
a
y
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
g
r
a
y
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
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


 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
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
s
p
a
c
e
-
y
-
5
"
>


 
 
 
 
 
 
 
 
{
/
*
 
E
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
 
(
M
e
n
t
o
r
'
s
 
G
u
i
d
a
n
c
e
)
 
*
/
}


 
 
 
 
 
 
 
 
{
s
t
e
p
.
m
e
n
t
o
r
_
g
u
i
d
a
n
c
e
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
5
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
4
,
 
d
e
l
a
y
:
 
0
.
1
 
}
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
r
o
u
n
d
e
d
-
2
x
l
 
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
i
n
d
i
g
o
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
i
n
d
i
g
o
-
8
0
0
 
b
g
-
i
n
d
i
g
o
-
5
0
/
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
i
n
d
i
g
o
-
9
0
0
/
1
0
 
p
-
6
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
2
 
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
g
 
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
g
r
a
y
-
9
5
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
w
h
i
t
e
 
m
b
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
E
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


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
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
g
r
a
y
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
g
r
a
y
-
3
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
 
w
h
i
t
e
s
p
a
c
e
-
p
r
e
-
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
.
m
e
n
t
o
r
_
g
u
i
d
a
n
c
e
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
{
/
*
 
C
o
d
e
 
E
x
a
m
p
l
e
s
 
(
C
o
m
m
a
n
d
s
)
 
*
/
}


 
 
 
 
 
 
 
 
{
s
t
e
p
.
c
o
m
m
a
n
d
s
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
5
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
4
,
 
d
e
l
a
y
:
 
0
.
1
5
 
}
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
r
o
u
n
d
e
d
-
2
x
l
 
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
i
n
d
i
g
o
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
i
n
d
i
g
o
-
8
0
0
 
b
g
-
i
n
d
i
g
o
-
5
0
/
3
0
 
d
a
r
k
:
b
g
-
i
n
d
i
g
o
-
9
0
0
/
1
0
 
p
-
6
 
s
p
a
c
e
-
y
-
4
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
2
 
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
g
 
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
g
r
a
y
-
9
5
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
w
h
i
t
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
o
d
e
 
E
x
a
m
p
l
e
s


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
.
c
o
m
m
a
n
d
s
.
m
a
p
(
(
c
m
d
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
o
m
m
a
n
d
B
l
o
c
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
`
$
{
s
t
e
p
.
i
d
}
-
$
{
c
m
d
.
l
a
b
e
l
 
|
|
 
i
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
{
c
m
d
.
l
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
d
e
=
{
c
m
d
.
c
o
d
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
{
/
*
 
I
m
p
o
r
t
a
n
t
 
N
o
t
e
s
 
(
D
e
t
a
i
l
s
)
 
*
/
}


 
 
 
 
 
 
 
 
{
s
t
e
p
.
d
e
t
a
i
l
s
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
5
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
4
,
 
d
e
l
a
y
:
 
0
.
2
 
}
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
r
o
u
n
d
e
d
-
2
x
l
 
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
b
l
u
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
b
l
u
e
-
8
0
0
 
b
g
-
b
l
u
e
-
5
0
/
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
b
l
u
e
-
9
0
0
/
1
0
 
p
-
6
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
2
.
5
 
m
b
-
4
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
w
-
8
 
h
-
8
 
r
o
u
n
d
e
d
-
x
l
 
b
g
-
b
l
u
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
g
-
b
l
u
e
-
9
0
0
/
2
0
 
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
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
I
n
f
o
 
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
 
t
e
x
t
-
b
l
u
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
b
l
u
e
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
3
 
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
g
r
a
y
-
9
5
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
w
h
i
t
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
I
m
p
o
r
t
a
n
t
 
N
o
t
e
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
3
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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
s
p
a
c
e
-
y
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
.
d
e
t
a
i
l
s
.
m
a
p
(
(
d
e
t
a
i
l
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
g
r
a
y
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
g
r
a
y
-
3
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
s
t
a
r
t
 
g
a
p
-
2
.
5
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
w
-
1
.
5
 
h
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
f
u
l
l
 
b
g
-
g
r
a
y
-
4
0
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
5
0
0
 
m
t
-
2
 
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
e
t
a
i
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
u
l
>


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
{
/
*
 
P
r
o
 
T
i
p
s
 
*
/
}


 
 
 
 
 
 
 
 
{
s
t
e
p
.
t
i
p
s
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
5
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
4
,
 
d
e
l
a
y
:
 
0
.
2
5
 
}
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
r
o
u
n
d
e
d
-
2
x
l
 
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
a
m
b
e
r
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
a
m
b
e
r
-
8
0
0
 
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
/
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
9
0
0
/
1
0
 
p
-
6
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
2
.
5
 
m
b
-
4
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
w
-
8
 
h
-
8
 
r
o
u
n
d
e
d
-
x
l
 
b
g
-
a
m
b
e
r
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
g
-
a
m
b
e
r
-
9
0
0
/
2
0
 
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
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
3
 
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
g
r
a
y
-
9
5
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
w
h
i
t
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
r
o
 
T
i
p
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
3
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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
s
p
a
c
e
-
y
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
.
t
i
p
s
.
m
a
p
(
(
t
i
p
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
g
r
a
y
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
g
r
a
y
-
3
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
s
t
a
r
t
 
g
a
p
-
2
.
5
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
w
-
1
.
5
 
h
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
f
u
l
l
 
b
g
-
g
r
a
y
-
4
0
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
5
0
0
 
m
t
-
2
 
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
i
p
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
u
l
>


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
{
/
*
 
R
e
s
o
u
r
c
e
s
 
*
/
}


 
 
 
 
 
 
 
 
{
s
t
e
p
.
r
e
s
o
u
r
c
e
s
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
5
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
4
,
 
d
e
l
a
y
:
 
0
.
3
 
}
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
r
o
u
n
d
e
d
-
2
x
l
 
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
p
u
r
p
l
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
p
u
r
p
l
e
-
8
0
0
 
b
g
-
p
u
r
p
l
e
-
5
0
/
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
p
u
r
p
l
e
-
9
0
0
/
1
0
 
p
-
6
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
2
.
5
 
m
b
-
4
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
w
-
8
 
h
-
8
 
r
o
u
n
d
e
d
-
x
l
 
b
g
-
p
u
r
p
l
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
g
-
p
u
r
p
l
e
-
9
0
0
/
2
0
 
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
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
E
x
t
e
r
n
a
l
L
i
n
k
 
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
 
t
e
x
t
-
p
u
r
p
l
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
p
u
r
p
l
e
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
3
 
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
g
r
a
y
-
9
5
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
w
h
i
t
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
s
o
u
r
c
e
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
3
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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
s
p
a
c
e
-
y
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
.
r
e
s
o
u
r
c
e
s
.
m
a
p
(
(
r
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
 
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
"
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
s
t
a
r
t
 
g
a
p
-
2
.
5
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
w
-
1
.
5
 
h
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
f
u
l
l
 
b
g
-
g
r
a
y
-
4
0
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
5
0
0
 
m
t
-
2
 
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
r
.
u
r
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
g
r
a
y
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
g
r
a
y
-
3
0
0
 
h
o
v
e
r
:
t
e
x
t
-
g
r
a
y
-
9
5
0
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
w
h
i
t
e
 
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
-
c
o
l
o
r
s
 
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
r
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
E
x
t
e
r
n
a
l
L
i
n
k
 
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
3
 
h
-
3
 
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
u
l
>


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
{
/
*
 
M
a
r
k
 
a
s
 
C
o
m
p
l
e
t
e
 
+
 
N
e
x
t
 
*
/
}


 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
5
 
}
}


 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
4
,
 
d
e
l
a
y
:
 
0
.
3
5
 
}
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
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
s
t
i
c
k
y
 
b
o
t
t
o
m
-
0
 
s
m
:
s
t
a
t
i
c
 
b
g
-
w
h
i
t
e
 
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
 
s
h
a
d
o
w
-
[
0
_
-
4
p
x
_
8
p
x
_
r
g
b
a
(
0
,
0
,
0
,
0
.
0
5
)
]
 
p
x
-
4
 
p
y
-
3
 
-
m
x
-
4
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
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
w
-
f
u
l
l
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
{
i
s
D
o
n
e
 
?
 
"
g
h
o
s
t
"
 
:
 
"
m
o
n
o
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
t
o
g
g
l
e
C
o
m
p
l
e
t
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
s
D
o
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
g
r
e
e
n
-
1
0
0
 
t
e
x
t
-
g
r
e
e
n
-
7
0
0
 
d
a
r
k
:
b
g
-
g
r
e
e
n
-
9
0
0
/
3
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
g
r
e
e
n
-
4
0
0
 
h
o
v
e
r
:
b
g
-
g
r
e
e
n
-
2
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
g
r
e
e
n
-
9
0
0
/
5
0
 
r
o
u
n
d
e
d
-
x
l
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
r
o
u
n
d
e
d
-
x
l
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
c
k
C
i
r
c
l
e
2
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
D
o
n
e
 
?
 
"
C
o
m
p
l
e
t
e
d
"
 
:
 
"
M
a
r
k
 
a
s
 
C
o
m
p
l
e
t
e
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>




 
 
 
 
 
 
 
 
 
 
 
 
{
n
e
x
t
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
o
u
t
l
i
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
n
a
v
i
g
a
t
e
(
`
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
f
i
r
s
t
-
p
r
/
$
{
n
e
x
t
.
i
d
}
`
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
g
r
o
u
p
 
t
e
x
t
-
g
r
a
y
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
g
r
a
y
-
4
0
0
 
r
o
u
n
d
e
d
-
x
l
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
N
e
x
t
 
S
e
c
t
i
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
R
i
g
h
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
 
g
r
o
u
p
-
h
o
v
e
r
:
t
r
a
n
s
l
a
t
e
-
x
-
0
.
5
 
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
-
t
r
a
n
s
f
o
r
m
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
s
C
h
i
l
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
o
u
t
l
i
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
o
u
p
 
t
e
x
t
-
g
r
a
y
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
g
r
a
y
-
4
0
0
 
r
o
u
n
d
e
d
-
x
l
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
"
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
f
i
r
s
t
-
p
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
n
o
-
u
n
d
e
r
l
i
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
B
a
c
k
 
t
o
 
O
v
e
r
v
i
e
w


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
R
i
g
h
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
 
g
r
o
u
p
-
h
o
v
e
r
:
t
r
a
n
s
l
a
t
e
-
x
-
0
.
5
 
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
-
t
r
a
n
s
f
o
r
m
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
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
m
o
t
i
o
n
.
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


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


