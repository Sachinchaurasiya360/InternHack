
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
E
f
f
e
c
t
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
 
t
y
p
e
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
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
 
B
o
o
k
O
p
e
n
,
 
C
l
o
c
k
,
 
G
l
o
b
e
,
 
P
a
u
s
e
,
 
P
l
a
y
,
 
R
o
t
a
t
e
C
c
w
 
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
 
E
n
g
i
n
e
e
r
i
n
g
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
 
f
r
o
m
 
"
@
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
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
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
 
t
y
p
e
 
{
 
E
n
g
T
a
b
D
e
f
,
 
E
n
g
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
 
}
 
f
r
o
m
 
"
@
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
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
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




c
o
n
s
t
 
S
D
 
=
 
"
#
8
4
c
c
1
6
"
;


c
o
n
s
t
 
N
E
U
T
R
A
L
 
=
 
"
#
6
4
7
4
8
b
"
;


c
o
n
s
t
 
W
A
R
N
 
=
 
"
#
f
5
9
e
0
b
"
;


c
o
n
s
t
 
P
U
R
P
L
E
 
=
 
"
#
8
b
5
c
f
6
"
;


c
o
n
s
t
 
M
O
N
O
 
=
 
'
"
J
e
t
B
r
a
i
n
s
 
M
o
n
o
"
,
 
M
e
n
l
o
,
 
C
o
n
s
o
l
a
s
,
 
m
o
n
o
s
p
a
c
e
'
;




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
T
i
t
l
e
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
=
 
{


 
 
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
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,
 
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
:
 
7
0
0
,
 
f
o
n
t
S
i
z
e
:
 
"
1
.
1
5
r
e
m
"
,


 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
m
a
r
g
i
n
:
 
"
0
 
0
 
1
2
p
x
"
,


}
;


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
D
e
s
c
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
=
 
{


 
 
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
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
2
r
e
m
"
,


 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
m
a
r
g
i
n
:
 
"
0
 
0
 
2
0
p
x
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
6
5
,


}
;




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
1
 
-
 
D
e
f
i
n
i
t
i
o
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




c
o
n
s
t
 
S
T
R
A
T
S
 
=
 
[


 
 
{


 
 
 
 
n
a
m
e
:
 
"
F
i
x
e
d
 
r
e
t
r
y
"
,


 
 
 
 
c
o
l
o
r
:
 
W
A
R
N
,


 
 
 
 
f
o
r
m
u
l
a
:
 
"
d
e
l
a
y
 
=
 
c
o
n
s
t
a
n
t
"
,


 
 
 
 
n
o
t
e
:
 
"
E
v
e
r
y
 
r
e
t
r
y
 
w
a
i
t
s
 
t
h
e
 
s
a
m
e
 
f
i
x
e
d
 
a
m
o
u
n
t
.
 
S
i
m
p
l
e
.
 
C
a
u
s
e
s
 
t
h
e
 
t
h
u
n
d
e
r
i
n
g
 
h
e
r
d
:
 
1
0
0
0
 
c
l
i
e
n
t
s
 
h
i
t
 
t
h
e
 
d
o
w
n
s
t
r
e
a
m
 
a
t
 
t
h
e
 
s
a
m
e
 
m
o
m
e
n
t
s
 
f
o
r
e
v
e
r
.
"
,


 
 
}
,


 
 
{


 
 
 
 
n
a
m
e
:
 
"
E
x
p
o
n
e
n
t
i
a
l
 
b
a
c
k
o
f
f
"
,


 
 
 
 
c
o
l
o
r
:
 
P
U
R
P
L
E
,


 
 
 
 
f
o
r
m
u
l
a
:
 
"
d
e
l
a
y
 
=
 
b
a
s
e
 
×
 
2
^
a
t
t
e
m
p
t
"
,


 
 
 
 
n
o
t
e
:
 
"
E
a
c
h
 
r
e
t
r
y
 
w
a
i
t
s
 
l
o
n
g
e
r
 
t
h
a
n
 
t
h
e
 
l
a
s
t
.
 
R
e
d
u
c
e
s
 
o
v
e
r
a
l
l
 
l
o
a
d
 
b
u
t
 
s
y
n
c
h
r
o
n
i
z
e
d
 
c
l
i
e
n
t
s
 
s
t
i
l
l
 
a
l
i
g
n
 
t
h
e
i
r
 
r
e
t
r
i
e
s
 
o
n
 
t
h
e
 
s
a
m
e
 
e
x
p
o
n
e
n
t
i
a
l
 
s
c
h
e
d
u
l
e
.
"
,


 
 
}
,


 
 
{


 
 
 
 
n
a
m
e
:
 
"
F
u
l
l
 
j
i
t
t
e
r
"
,


 
 
 
 
c
o
l
o
r
:
 
S
D
,


 
 
 
 
f
o
r
m
u
l
a
:
 
"
d
e
l
a
y
 
=
 
r
a
n
d
o
m
(
0
,
 
b
a
s
e
 
×
 
2
^
a
t
t
e
m
p
t
)
"
,


 
 
 
 
n
o
t
e
:
 
"
P
i
c
k
 
a
 
r
a
n
d
o
m
 
v
a
l
u
e
 
w
i
t
h
i
n
 
t
h
e
 
e
x
p
o
n
e
n
t
i
a
l
 
w
i
n
d
o
w
.
 
S
p
r
e
a
d
s
 
r
e
t
r
i
e
s
 
u
n
i
f
o
r
m
l
y
 
a
c
r
o
s
s
 
t
i
m
e
.
 
T
h
e
 
s
t
a
n
d
a
r
d
 
f
o
r
 
p
r
o
d
u
c
t
i
o
n
.
"
,


 
 
}
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
 
D
e
f
i
n
i
t
i
o
n
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
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
}
>
W
h
y
 
n
a
i
v
e
 
r
e
t
r
i
e
s
 
m
a
k
e
 
o
u
t
a
g
e
s
 
w
o
r
s
e
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
R
e
t
r
i
e
s
 
a
r
e
 
h
o
w
 
d
i
s
t
r
i
b
u
t
e
d
 
s
y
s
t
e
m
s
 
h
e
a
l
 
f
r
o
m
 
t
r
a
n
s
i
e
n
t
 
f
a
i
l
u
r
e
s
.
 
D
o
n
e
 
w
r
o
n
g
,
 
t
h
e
y
 
t
u
r
n
 
a


 
 
 
 
 
 
 
 
s
m
a
l
l
 
d
o
w
n
s
t
r
e
a
m
 
b
l
i
p
 
i
n
t
o
 
a
n
 
u
n
r
e
c
o
v
e
r
a
b
l
e
 
r
e
t
r
y
 
s
t
o
r
m
.
 
T
h
r
e
e
 
s
t
r
a
t
e
g
i
e
s
,
 
o
r
d
e
r
e
d
 
b
y


 
 
 
 
 
 
 
 
s
o
p
h
i
s
t
i
c
a
t
i
o
n
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
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
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
v
i
s
i
b
l
e
"


 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{
 
h
i
d
d
e
n
:
 
{
}
,
 
v
i
s
i
b
l
e
:
 
{
 
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
:
 
{
 
s
t
a
g
g
e
r
C
h
i
l
d
r
e
n
:
 
0
.
1
 
}
 
}
 
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
 
m
d
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
3
 
g
a
p
-
3
 
m
b
-
6
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
S
T
R
A
T
S
.
m
a
p
(
(
s
)
 
=
>
 
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


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{
 
h
i
d
d
e
n
:
 
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
0
 
}
,
 
v
i
s
i
b
l
e
:
 
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
,
 
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
:
 
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
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
 
}
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
6
p
x
 
1
8
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
s
.
c
o
l
o
r
}
5
5
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
`
$
{
s
.
c
o
l
o
r
}
0
8
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
l
e
x
D
i
r
e
c
t
i
o
n
:
 
"
c
o
l
u
m
n
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
a
p
:
 
1
0
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
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
:
 
7
0
0
,
 
c
o
l
o
r
:
 
s
.
c
o
l
o
r
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
5
r
e
m
"
 
}
}
>
{
s
.
n
a
m
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
 
s
t
y
l
e
=
{
{
 
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
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
8
r
e
m
"
,
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
0
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,
 
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
 
"
v
a
r
(
-
-
e
n
g
-
s
u
r
f
a
c
e
)
"
,
 
b
o
r
d
e
r
:
 
`
1
p
x
 
s
o
l
i
d
 
$
{
s
.
c
o
l
o
r
}
3
3
`
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
f
o
r
m
u
l
a
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
4
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
 
}
}
>
{
s
.
n
o
t
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




 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
6
p
x
 
1
8
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
,
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
S
D
}
5
5
`
,
 
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
 
`
$
{
S
D
}
1
0
`
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
1
6
 
}
}
>


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
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
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,
 
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
:
 
8
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
2
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
T
H
E
 
T
H
R
E
E
 
R
U
L
E
S


 
 
 
 
 
 
 
 
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
8
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
7
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
b
>
1
.
 
A
l
w
a
y
s
 
c
a
p
 
r
e
t
r
y
 
c
o
u
n
t
.
<
/
b
>
 
3
-
5
 
a
t
t
e
m
p
t
s
 
i
s
 
p
l
e
n
t
y
.
 
I
n
f
i
n
i
t
e
 
r
e
t
r
y
 
q
u
e
u
e
s
 
a
r
e
 
a


 
 
 
 
 
 
 
 
 
 
b
u
g
.


 
 
 
 
 
 
 
 
 
 
<
b
r
 
/
>


 
 
 
 
 
 
 
 
 
 
<
b
>
2
.
 
A
l
w
a
y
s
 
s
e
t
 
a
 
t
i
m
e
o
u
t
.
<
/
b
>
 
A
 
r
e
t
r
y
 
w
i
t
h
o
u
t
 
a
 
t
i
m
e
o
u
t
 
i
s
 
j
u
s
t
 
a
 
h
u
n
g
 
c
o
n
n
e
c
t
i
o
n


 
 
 
 
 
 
 
 
 
 
w
a
i
t
i
n
g
 
t
o
 
r
e
t
r
y
.


 
 
 
 
 
 
 
 
 
 
<
b
r
 
/
>


 
 
 
 
 
 
 
 
 
 
<
b
>
3
.
 
A
l
w
a
y
s
 
a
d
d
 
j
i
t
t
e
r
.
<
/
b
>
 
S
y
n
c
h
r
o
n
i
z
e
d
 
r
e
t
r
i
e
s
 
a
r
e
 
h
o
w
 
o
u
t
a
g
e
s
 
s
t
a
y
 
o
u
t
a
g
e
s
.


 
 
 
 
 
 
 
 
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
d
i
v
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
6
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
 
}
}
>


 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
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
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,
 
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
:
 
8
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
2
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
R
E
A
L
 
E
X
A
M
P
L
E
S


 
 
 
 
 
 
 
 
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
6
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
7
 
}
}
>


 
 
 
 
 
 
 
 
 
 
A
W
S
 
S
D
K
 
s
h
i
p
s
 
f
u
l
l
-
j
i
t
t
e
r
 
e
x
p
o
n
e
n
t
i
a
l
 
b
a
c
k
o
f
f
 
b
y
 
d
e
f
a
u
l
t
.
 
<
b
>
S
t
r
i
p
e
<
/
b
>
 
S
D
K
s


 
 
 
 
 
 
 
 
 
 
r
e
t
r
y
 
i
d
e
m
p
o
t
e
n
t
 
r
e
q
u
e
s
t
s
 
w
i
t
h
 
f
u
l
l
 
j
i
t
t
e
r
.
 
<
b
>
g
R
P
C
<
/
b
>
 
r
e
t
r
y
 
p
o
l
i
c
i
e
s
 
a
r
e


 
 
 
 
 
 
 
 
 
 
c
o
n
f
i
g
u
r
a
b
l
e
 
p
e
r
-
s
e
r
v
i
c
e
.
 
<
b
>
P
o
l
l
y
<
/
b
>
 
(
.
N
E
T
)
 
a
n
d
 
<
b
>
R
e
s
i
l
i
e
n
c
e
4
j
<
/
b
>
 
(
J
V
M
)
 
a
r
e
 
t
h
e


 
 
 
 
 
 
 
 
 
 
c
a
n
o
n
i
c
a
l
 
l
i
b
r
a
r
i
e
s
.


 
 
 
 
 
 
 
 
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
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
2
 
-
 
T
h
r
e
e
 
s
t
r
a
t
e
g
i
e
s
 
r
a
c
i
n
g
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
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
 
H
i
t
 
{
 
t
:
 
n
u
m
b
e
r
;
 
c
l
i
e
n
t
:
 
n
u
m
b
e
r
;
 
}




c
o
n
s
t
 
C
L
I
E
N
T
S
 
=
 
3
0
;


c
o
n
s
t
 
A
T
T
E
M
P
T
S
 
=
 
4
;


c
o
n
s
t
 
B
A
S
E
_
M
S
 
=
 
5
0
0
;


c
o
n
s
t
 
S
I
M
_
M
S
 
=
 
1
2
0
0
0
;




f
u
n
c
t
i
o
n
 
p
r
e
c
o
m
p
u
t
e
(
s
t
r
a
t
e
g
y
:
 
"
f
i
x
e
d
"
 
|
 
"
e
x
p
o
"
 
|
 
"
j
i
t
t
e
r
"
)
:
 
H
i
t
[
]
 
{


 
 
c
o
n
s
t
 
h
i
t
s
:
 
H
i
t
[
]
 
=
 
[
]
;


 
 
f
o
r
 
(
l
e
t
 
c
 
=
 
0
;
 
c
 
<
 
C
L
I
E
N
T
S
;
 
c
+
+
)
 
{


 
 
 
 
l
e
t
 
t
 
=
 
0
;


 
 
 
 
f
o
r
 
(
l
e
t
 
a
 
=
 
0
;
 
a
 
<
 
A
T
T
E
M
P
T
S
;
 
a
+
+
)
 
{


 
 
 
 
 
 
l
e
t
 
d
e
l
a
y
:
 
n
u
m
b
e
r
;


 
 
 
 
 
 
i
f
 
(
s
t
r
a
t
e
g
y
 
=
=
=
 
"
f
i
x
e
d
"
)
 
d
e
l
a
y
 
=
 
B
A
S
E
_
M
S
;


 
 
 
 
 
 
e
l
s
e
 
i
f
 
(
s
t
r
a
t
e
g
y
 
=
=
=
 
"
e
x
p
o
"
)
 
d
e
l
a
y
 
=
 
B
A
S
E
_
M
S
 
*
 
M
a
t
h
.
p
o
w
(
2
,
 
a
)
;


 
 
 
 
 
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
a
p
 
=
 
B
A
S
E
_
M
S
 
*
 
M
a
t
h
.
p
o
w
(
2
,
 
a
)
;


 
 
 
 
 
 
 
 
d
e
l
a
y
 
=
 
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
c
a
p
;


 
 
 
 
 
 
}


 
 
 
 
 
 
t
 
+
=
 
d
e
l
a
y
;


 
 
 
 
 
 
i
f
 
(
t
 
>
 
S
I
M
_
M
S
)
 
b
r
e
a
k
;


 
 
 
 
 
 
h
i
t
s
.
p
u
s
h
(
{
 
t
,
 
c
l
i
e
n
t
:
 
c
 
}
)
;


 
 
 
 
}


 
 
}


 
 
r
e
t
u
r
n
 
h
i
t
s
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
 
T
h
r
e
e
S
t
r
a
t
e
g
i
e
s
(
)
 
{


 
 
c
o
n
s
t
 
[
r
u
n
n
i
n
g
,
 
s
e
t
R
u
n
n
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
t
N
o
w
,
 
s
e
t
T
N
o
w
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


 
 
c
o
n
s
t
 
[
s
e
e
d
,
 
s
e
t
S
e
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
(
0
)
;


 
 
c
o
n
s
t
 
[
h
i
t
s
,
 
s
e
t
H
i
t
s
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
{
 
f
i
x
e
d
:
 
H
i
t
[
]
;
 
e
x
p
o
:
 
H
i
t
[
]
;
 
j
i
t
t
e
r
:
 
H
i
t
[
]
 
}
>
(
{


 
 
 
 
f
i
x
e
d
:
 
[
]
,


 
 
 
 
e
x
p
o
:
 
[
]
,


 
 
 
 
j
i
t
t
e
r
:
 
[
]
,


 
 
}
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


 
 
 
 
/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
r
e
a
c
t
-
h
o
o
k
s
/
s
e
t
-
s
t
a
t
e
-
i
n
-
e
f
f
e
c
t


 
 
 
 
s
e
t
H
i
t
s
(
{


 
 
 
 
 
 
f
i
x
e
d
:
 
p
r
e
c
o
m
p
u
t
e
(
"
f
i
x
e
d
"
)
,


 
 
 
 
 
 
e
x
p
o
:
 
p
r
e
c
o
m
p
u
t
e
(
"
e
x
p
o
"
)
,


 
 
 
 
 
 
j
i
t
t
e
r
:
 
p
r
e
c
o
m
p
u
t
e
(
"
j
i
t
t
e
r
"
)
,


 
 
 
 
}
)
;


 
 
 
 
 


 
 
 
 
s
e
t
T
N
o
w
(
0
)
;


 
 
 
 
 


 
 
 
 
s
e
t
R
u
n
n
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


 
 
 
 
/
/
 
s
e
e
d
 
u
s
e
d
 
t
o
 
f
o
r
c
e
 
r
e
-
p
r
e
c
o
m
p
u
t
e
 
e
v
e
n
 
i
f
 
o
t
h
e
r
 
d
e
p
s
 
a
r
e
 
e
q
u
a
l


 
 
 
 
v
o
i
d
 
s
e
e
d
;


 
 
}
,
 
[
s
e
e
d
]
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


 
 
 
 
i
f
 
(
!
r
u
n
n
i
n
g
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
 
h
a
n
d
l
e
 
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


 
 
 
 
 
 
s
e
t
T
N
o
w
(
(
t
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
 
t
 
+
 
8
0
;


 
 
 
 
 
 
 
 
i
f
 
(
n
e
x
t
 
>
=
 
S
I
M
_
M
S
)
 
{


 
 
 
 
 
 
 
 
 
 
s
e
t
R
u
n
n
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


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
S
I
M
_
M
S
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
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


 
 
 
 
}
,
 
8
0
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
h
a
n
d
l
e
)
;


 
 
}
,
 
[
r
u
n
n
i
n
g
]
)
;




 
 
c
o
n
s
t
 
r
e
s
e
t
 
=
 
(
)
 
=
>
 
{


 
 
 
 
s
e
t
T
N
o
w
(
0
)
;


 
 
 
 
s
e
t
R
u
n
n
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
S
e
e
d
(
(
s
)
 
=
>
 
s
 
+
 
1
)
;


 
 
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
d
i
v
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
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
}
>
S
a
m
e
 
o
u
t
a
g
e
.
 
S
a
m
e
 
3
0
 
c
l
i
e
n
t
s
.
 
T
h
r
e
e
 
r
e
t
r
y
 
s
t
r
a
t
e
g
i
e
s
.
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
A
t
 
t
=
0
 
t
h
e
 
d
o
w
n
s
t
r
e
a
m
 
r
e
j
e
c
t
s
 
a
l
l
 
3
0
 
c
l
i
e
n
t
s
 
a
t
 
o
n
c
e
.
 
E
a
c
h
 
s
t
r
a
t
e
g
y
 
r
e
t
r
i
e
s
 
u
p
 
t
o
 
4
 
t
i
m
e
s
.


 
 
 
 
 
 
 
 
P
r
e
s
s
 
p
l
a
y
 
a
n
d
 
w
a
t
c
h
 
w
h
e
n
 
t
h
o
s
e
 
r
e
t
r
i
e
s
 
a
c
t
u
a
l
l
y
 
a
r
r
i
v
e
 
a
t
 
t
h
e
 
d
o
w
n
s
t
r
e
a
m
 
—
 
l
o
o
k
 
f
o
r
 
t
h
e


 
 
 
 
 
 
 
 
s
p
i
k
e
s
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
<
d
i
v
 
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
 
"
#
0
b
1
2
2
0
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
2
,
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
5
)
"
,
 
p
a
d
d
i
n
g
:
 
2
2
 
}
}
>


 
 
 
 
 
 
 
 
<
L
a
n
e
 
n
a
m
e
=
"
F
i
x
e
d
 
r
e
t
r
y
 
·
 
s
a
m
e
 
d
e
l
a
y
 
e
v
e
r
y
 
a
t
t
e
m
p
t
"
 
c
o
l
o
r
=
{
W
A
R
N
}
 
h
i
t
s
=
{
h
i
t
s
.
f
i
x
e
d
}
 
t
N
o
w
=
{
t
N
o
w
}
 
/
>


 
 
 
 
 
 
 
 
<
L
a
n
e
 
n
a
m
e
=
"
E
x
p
o
n
e
n
t
i
a
l
 
b
a
c
k
o
f
f
 
·
 
d
o
u
b
l
e
s
 
e
a
c
h
 
a
t
t
e
m
p
t
"
 
c
o
l
o
r
=
{
P
U
R
P
L
E
}
 
h
i
t
s
=
{
h
i
t
s
.
e
x
p
o
}
 
t
N
o
w
=
{
t
N
o
w
}
 
/
>


 
 
 
 
 
 
 
 
<
L
a
n
e
 
n
a
m
e
=
"
F
u
l
l
 
j
i
t
t
e
r
 
·
 
r
a
n
d
o
m
i
z
e
d
 
w
i
t
h
i
n
 
e
x
p
o
n
e
n
t
i
a
l
 
w
i
n
d
o
w
"
 
c
o
l
o
r
=
{
S
D
}
 
h
i
t
s
=
{
h
i
t
s
.
j
i
t
t
e
r
}
 
t
N
o
w
=
{
t
N
o
w
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
 
m
t
-
5
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
b
u
t
t
o
n
 
w
h
i
l
e
T
a
p
=
{
{
 
s
c
a
l
e
:
 
0
.
9
5
 
}
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
(
)
 
=
>
 
s
e
t
R
u
n
n
i
n
g
(
(
r
)
 
=
>
 
!
r
)
}
 
s
t
y
l
e
=
{
b
t
n
(
S
D
)
}
>


 
 
 
 
 
 
 
 
 
 
 
 
{
r
u
n
n
i
n
g
 
?
 
<
P
a
u
s
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
}


 
 
 
 
 
 
 
 
 
 
 
 
{
r
u
n
n
i
n
g
 
?
 
"
p
a
u
s
e
"
 
:
 
t
N
o
w
 
>
=
 
S
I
M
_
M
S
 
?
 
"
r
e
p
l
a
y
"
 
:
 
t
N
o
w
 
>
 
0
 
?
 
"
r
e
s
u
m
e
"
 
:
 
"
p
l
a
y
"
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
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
b
u
t
t
o
n
 
w
h
i
l
e
T
a
p
=
{
{
 
s
c
a
l
e
:
 
0
.
9
5
 
}
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
r
e
s
e
t
}
 
s
t
y
l
e
=
{
b
t
n
(
N
E
U
T
R
A
L
)
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
R
o
t
a
t
e
C
c
w
 
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


 
 
 
 
 
 
 
 
 
 
 
 
r
e
s
e
t
 
·
 
n
e
w
 
s
e
e
d


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
l
e
x
:
 
1
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
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
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
t
 
=
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
,
 
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
:
 
7
0
0
 
}
}
>
{
(
t
N
o
w
 
/
 
1
0
0
0
)
.
t
o
F
i
x
e
d
(
1
)
}
s
<
/
s
p
a
n
>
 
/
 
1
2
.
0
s


 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
 
 
{
t
N
o
w
 
>
=
 
S
I
M
_
M
S
 
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
 
8
 
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
3
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
m
a
r
g
i
n
T
o
p
:
 
1
4
,
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
1
4
p
x
"
,
 
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
 
"
r
g
b
a
(
1
5
,
2
3
,
4
2
,
0
.
6
)
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
6
r
e
m
"
,
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
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
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,
 
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
:
 
8
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
2
e
m
"
,
 
m
a
r
g
i
n
R
i
g
h
t
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
U
M
M
A
R
Y


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
N
o
t
i
c
e
 
h
o
w
 
<
b
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
f
i
x
e
d
 
r
e
t
r
y
<
/
b
>
 
s
h
o
w
s
 
t
a
l
l
 
s
p
i
k
e
s
 
—
 
e
v
e
r
y
 
c
l
i
e
n
t
 
r
e
t
r
i
e
d
 
a
t
 
t
h
e


 
 
 
 
 
 
 
 
 
 
 
 
s
a
m
e
 
m
o
m
e
n
t
s
,
 
h
a
m
m
e
r
i
n
g
 
t
h
e
 
d
o
w
n
s
t
r
e
a
m
.
 
<
b
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
P
U
R
P
L
E
 
}
}
>
E
x
p
o
n
e
n
t
i
a
l
 
b
a
c
k
o
f
f
<
/
b
>
 
s
p
r
e
a
d
s


 
 
 
 
 
 
 
 
 
 
 
 
t
h
e
m
 
a
l
o
n
g
 
t
h
e
 
d
o
u
b
l
i
n
g
 
s
c
h
e
d
u
l
e
 
b
u
t
 
s
p
i
k
e
s
 
s
t
i
l
l
 
a
l
i
g
n
.
 
<
b
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
 
}
}
>
F
u
l
l
 
j
i
t
t
e
r
<
/
b
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
s
o
l
v
e
s
 
t
h
e
 
s
p
i
k
e
s
 
i
n
t
o
 
a
 
u
n
i
f
o
r
m
 
l
o
a
d
 
—
 
t
h
e
 
d
o
w
n
s
t
r
e
a
m
 
g
e
t
s
 
a
 
c
h
a
n
c
e
 
t
o
 
r
e
c
o
v
e
r
.


 
 
 
 
 
 
 
 
 
 
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




f
u
n
c
t
i
o
n
 
L
a
n
e
(
{
 
n
a
m
e
,
 
c
o
l
o
r
,
 
h
i
t
s
,
 
t
N
o
w
 
}
:
 
{
 
n
a
m
e
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
l
o
r
:
 
s
t
r
i
n
g
;
 
h
i
t
s
:
 
H
i
t
[
]
;
 
t
N
o
w
:
 
n
u
m
b
e
r
 
}
)
 
{


 
 
/
/
 
A
g
g
r
e
g
a
t
e
 
h
i
t
s
 
i
n
t
o
 
2
5
0
m
s
 
b
u
c
k
e
t
s
 
f
o
r
 
t
h
e
 
h
i
s
t
o
g
r
a
m


 
 
c
o
n
s
t
 
b
u
c
k
e
t
M
s
 
=
 
2
5
0
;


 
 
c
o
n
s
t
 
b
u
c
k
e
t
s
 
=
 
M
a
t
h
.
c
e
i
l
(
S
I
M
_
M
S
 
/
 
b
u
c
k
e
t
M
s
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
s
 
=
 
A
r
r
a
y
(
b
u
c
k
e
t
s
)
.
f
i
l
l
(
0
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
 
h
 
o
f
 
h
i
t
s
)
 
{


 
 
 
 
i
f
 
(
h
.
t
 
>
 
t
N
o
w
)
 
c
o
n
t
i
n
u
e
;


 
 
 
 
c
o
n
s
t
 
i
 
=
 
M
a
t
h
.
f
l
o
o
r
(
h
.
t
 
/
 
b
u
c
k
e
t
M
s
)
;


 
 
 
 
i
f
 
(
i
 
<
 
b
u
c
k
e
t
s
)
 
c
o
u
n
t
s
[
i
]
+
+
;


 
 
}


 
 
c
o
n
s
t
 
m
a
x
 
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
1
,
 
.
.
.
c
o
u
n
t
s
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
 
s
t
y
l
e
=
{
{
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
1
4
 
}
}
>


 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
j
u
s
t
i
f
y
C
o
n
t
e
n
t
:
 
"
s
p
a
c
e
-
b
e
t
w
e
e
n
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
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
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
4
r
e
m
"
,
 
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
:
 
7
0
0
,
 
c
o
l
o
r
 
}
}
>
{
n
a
m
e
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
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
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
 
}
}
>


 
 
 
 
 
 
 
 
 
 
r
e
t
r
i
e
s
 
s
o
 
f
a
r
:
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
,
 
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
:
 
7
0
0
 
}
}
>
{
h
i
t
s
.
f
i
l
t
e
r
(
(
h
)
 
=
>
 
h
.
t
 
<
=
 
t
N
o
w
)
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


 
 
 
 
 
 
 
 
 
 
{
"
 
·
 
"
}
p
e
a
k
:
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
,
 
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
:
 
7
0
0
 
}
}
>
{
M
a
t
h
.
m
a
x
(
.
.
.
c
o
u
n
t
s
)
}
/
2
5
0
m
s
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
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
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
f
l
e
x
-
e
n
d
"
,
 
g
a
p
:
 
1
,
 
h
e
i
g
h
t
:
 
6
4
,
 
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
 
"
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
0
8
)
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,
 
p
a
d
d
i
n
g
:
 
4
,
 
b
o
r
d
e
r
:
 
`
1
p
x
 
s
o
l
i
d
 
$
{
c
o
l
o
r
}
2
2
`
 
}
}
>


 
 
 
 
 
 
 
 
{
c
o
u
n
t
s
.
m
a
p
(
(
c
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
 
t
B
u
c
k
e
t
 
=
 
i
 
*
 
b
u
c
k
e
t
M
s
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
P
a
s
t
 
=
 
t
B
u
c
k
e
t
 
<
=
 
t
N
o
w
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
c
t
 
=
 
m
a
x
 
=
=
=
 
0
 
?
 
0
 
:
 
(
c
 
/
 
m
a
x
)
 
*
 
1
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
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
 
h
e
i
g
h
t
:
 
`
$
{
p
c
t
}
%
`
,
 
o
p
a
c
i
t
y
:
 
i
s
P
a
s
t
 
?
 
1
 
:
 
0
.
2
 
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
1
,
 
e
a
s
e
:
 
"
l
i
n
e
a
r
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
l
e
x
:
 
1
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
o
l
o
r
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
i
n
H
e
i
g
h
t
:
 
c
 
>
 
0
 
?
 
2
 
:
 
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
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




f
u
n
c
t
i
o
n
 
b
t
n
(
c
o
l
o
r
:
 
s
t
r
i
n
g
)
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
{


 
 
r
e
t
u
r
n
 
{


 
 
 
 
d
i
s
p
l
a
y
:
 
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
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
6
,


 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
4
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,
 
c
u
r
s
o
r
:
 
"
p
o
i
n
t
e
r
"
,


 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
c
o
l
o
r
}
`
,
 
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
 
`
$
{
c
o
l
o
r
}
1
8
`
,
 
c
o
l
o
r
,


 
 
 
 
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
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
2
r
e
m
"
,
 
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
:
 
7
0
0
,


 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,
 
t
e
x
t
T
r
a
n
s
f
o
r
m
:
 
"
u
p
p
e
r
c
a
s
e
"
,


 
 
}
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
3
 
-
 
T
h
e
 
f
u
l
l
 
r
e
t
r
y
 
p
o
l
i
c
y
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
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
 
F
u
l
l
P
o
l
i
c
y
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
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
}
>
A
 
r
e
t
r
y
 
p
o
l
i
c
y
 
y
o
u
&
r
s
q
u
o
;
d
 
s
h
i
p
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
T
h
e
 
m
i
n
i
m
u
m
 
p
o
l
i
c
y
 
f
o
r
 
a
n
y
 
p
r
o
d
u
c
t
i
o
n
 
H
T
T
P
 
c
l
i
e
n
t
:
 
b
o
u
n
d
e
d
 
r
e
t
r
i
e
s
,
 
p
e
r
-
a
t
t
e
m
p
t
 
t
i
m
e
o
u
t
,


 
 
 
 
 
 
 
 
f
u
l
l
 
j
i
t
t
e
r
,
 
r
e
t
r
y
 
o
n
l
y
 
o
n
 
s
a
f
e
 
c
o
d
e
s
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
<
d
i
v
 
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
 
"
#
0
b
1
2
2
0
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
2
,
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
5
)
"
,
 
p
a
d
d
i
n
g
:
 
2
2
 
}
}
>


 
 
 
 
 
 
 
 
<
p
r
e
 
s
t
y
l
e
=
{
{
 
m
a
r
g
i
n
:
 
0
,
 
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
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
2
r
e
m
"
,
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
7
5
,
 
o
v
e
r
f
l
o
w
X
:
 
"
a
u
t
o
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
 
}
}
>
{
`
/
/
 
r
e
t
r
y
 
c
o
n
f
i
g
`
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
{
"
\
n
"
}


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
 
}
}
>
c
o
n
s
t
<
/
s
p
a
n
>
 
p
o
l
i
c
y
 
=
 
{
"
{
"
}


 
 
 
 
 
 
 
 
 
 
{
"
\
n
 
 
"
}
m
a
x
A
t
t
e
m
p
t
s
:
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
4
<
/
s
p
a
n
>
,
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
 
}
}
>
{
`
/
/
 
1
 
t
r
y
 
+
 
3
 
r
e
t
r
i
e
s
`
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
{
"
\
n
 
 
"
}
p
e
r
A
t
t
e
m
p
t
T
i
m
e
o
u
t
:
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
"
2
s
"
<
/
s
p
a
n
>
,


 
 
 
 
 
 
 
 
 
 
{
"
\
n
 
 
"
}
t
o
t
a
l
T
i
m
e
o
u
t
:
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
"
1
0
s
"
<
/
s
p
a
n
>
,
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
 
}
}
>
{
`
/
/
 
h
a
r
d
 
c
a
p
`
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
{
"
\
n
 
 
"
}
b
a
c
k
o
f
f
:
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
"
f
u
l
l
-
j
i
t
t
e
r
"
<
/
s
p
a
n
>
,


 
 
 
 
 
 
 
 
 
 
{
"
\
n
 
 
"
}
b
a
s
e
:
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
5
0
0
<
/
s
p
a
n
>
,
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
 
}
}
>
{
`
/
/
 
m
s
`
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
{
"
\
n
 
 
"
}
c
a
p
:
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
1
0
_
0
0
0
<
/
s
p
a
n
>
,
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
 
}
}
>
{
`
/
/
 
m
s
 
(
n
e
v
e
r
 
w
a
i
t
 
m
o
r
e
 
t
h
a
n
 
1
0
s
)
`
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
{
"
\
n
 
 
"
}
r
e
t
r
y
O
n
:
 
 
 
 
 
 
 
 
[
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
5
0
0
<
/
s
p
a
n
>
,
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
5
0
2
<
/
s
p
a
n
>
,
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
5
0
3
<
/
s
p
a
n
>
,
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
5
0
4
<
/
s
p
a
n
>
,
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
"
n
e
t
w
o
r
k
-
e
r
r
o
r
"
<
/
s
p
a
n
>
]
,


 
 
 
 
 
 
 
 
 
 
{
"
\
n
 
 
"
}
d
o
N
o
t
R
e
t
r
y
O
n
:
 
 
 
[
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
4
0
0
<
/
s
p
a
n
>
,
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
4
0
1
<
/
s
p
a
n
>
,
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
4
0
3
<
/
s
p
a
n
>
,
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
4
0
4
<
/
s
p
a
n
>
,
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
4
0
9
<
/
s
p
a
n
>
,
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
4
2
2
<
/
s
p
a
n
>
]
,


 
 
 
 
 
 
 
 
 
 
{
"
\
n
 
 
"
}
r
e
t
r
y
N
o
n
I
d
e
m
p
o
t
e
n
t
:
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
f
a
l
s
e
<
/
s
p
a
n
>
,
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
 
}
}
>
{
`
/
/
 
o
n
l
y
 
r
e
t
r
y
 
G
E
T
,
 
P
U
T
,
 
D
E
L
E
T
E
`
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
{
"
\
n
"
}
{
"
}
"
}
;


 
 
 
 
 
 
 
 
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
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
v
i
s
i
b
l
e
"


 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{
 
h
i
d
d
e
n
:
 
{
}
,
 
v
i
s
i
b
l
e
:
 
{
 
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
:
 
{
 
s
t
a
g
g
e
r
C
h
i
l
d
r
e
n
:
 
0
.
0
7
 
}
 
}
 
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
 
m
d
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
 
m
t
-
5
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
 
 
{
 
k
:
 
"
W
h
y
 
b
o
u
n
d
e
d
 
a
t
t
e
m
p
t
s
"
,
 
v
:
 
"
A
n
 
i
n
f
i
n
i
t
e
-
r
e
t
r
y
 
l
o
o
p
 
i
s
 
j
u
s
t
 
a
 
q
u
e
u
e
 
o
f
 
d
o
o
m
e
d
 
w
o
r
k
.
 
3
-
5
 
a
t
t
e
m
p
t
s
 
c
a
t
c
h
e
s
 
t
r
a
n
s
i
e
n
t
 
f
a
i
l
u
r
e
s
;
 
b
e
y
o
n
d
 
t
h
a
t
,
 
r
e
a
l
 
f
a
i
l
u
r
e
 
i
s
 
s
i
g
n
a
l
e
d
.
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
k
:
 
"
W
h
y
 
p
e
r
-
a
t
t
e
m
p
t
 
t
i
m
e
o
u
t
"
,
 
v
:
 
"
W
i
t
h
o
u
t
 
i
t
,
 
a
 
h
u
n
g
 
T
C
P
 
c
o
n
n
e
c
t
i
o
n
 
m
e
a
n
s
 
e
a
c
h
 
r
e
t
r
y
 
b
u
r
n
s
 
i
t
s
 
o
w
n
 
m
i
n
u
t
e
s
 
b
e
f
o
r
e
 
f
a
i
l
i
n
g
.
 
P
e
r
-
a
t
t
e
m
p
t
 
t
i
m
e
o
u
t
 
m
a
k
e
s
 
f
a
i
l
u
r
e
s
 
f
a
s
t
.
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
k
:
 
"
W
h
y
 
r
e
t
r
y
 
o
n
l
y
 
s
a
f
e
 
c
o
d
e
s
"
,
 
v
:
 
"
R
e
t
r
y
i
n
g
 
a
 
4
x
x
 
i
s
 
p
o
i
n
t
l
e
s
s
 
(
t
h
e
 
c
l
i
e
n
t
 
i
s
 
w
r
o
n
g
)
 
a
n
d
 
d
a
n
g
e
r
o
u
s
 
o
n
 
n
o
n
-
i
d
e
m
p
o
t
e
n
t
 
o
p
e
r
a
t
i
o
n
s
.
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
k
:
 
"
W
h
y
 
t
o
t
a
l
 
t
i
m
e
o
u
t
"
,
 
v
:
 
"
U
s
e
r
 
i
s
 
w
a
i
t
i
n
g
.
 
A
f
t
e
r
 
1
0
s
 
o
f
 
r
e
t
r
i
e
s
 
t
h
e
y
'
r
e
 
g
o
n
e
 
a
n
y
w
a
y
.
 
C
a
p
 
t
h
e
 
t
o
t
a
l
 
s
o
 
y
o
u
 
f
a
i
l
 
v
i
s
i
b
l
y
 
i
n
s
t
e
a
d
 
o
f
 
s
i
l
e
n
t
l
y
 
l
i
n
g
e
r
i
n
g
.
"
 
}
,


 
 
 
 
 
 
 
 
]
.
m
a
p
(
(
c
)
 
=
>
 
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


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
c
.
k
}


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{
 
h
i
d
d
e
n
:
 
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
 
8
 
}
,
 
v
i
s
i
b
l
e
:
 
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
,
 
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
:
 
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
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
 
}
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
6
p
x
"
,
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
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
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,
 
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
:
 
8
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
.
k
.
t
o
U
p
p
e
r
C
a
s
e
(
)
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
4
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
 
}
}
>
{
c
.
v
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
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
A
c
t
i
v
i
t
y
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




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
 
S
D
_
L
6
_
R
e
t
r
y
J
i
t
t
e
r
A
c
t
i
v
i
t
y
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
 
}
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
 
E
n
g
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
d
e
f
"
,
 
l
a
b
e
l
:
 
"
D
e
f
i
n
i
t
i
o
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
D
e
f
i
n
i
t
i
o
n
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
d
e
m
o
"
,
 
l
a
b
e
l
:
 
"
W
a
t
c
h
 
t
h
e
 
S
t
o
r
m
s
"
,
 
i
c
o
n
:
 
<
C
l
o
c
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
h
r
e
e
S
t
r
a
t
e
g
i
e
s
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
p
o
l
i
c
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
R
e
a
l
 
P
o
l
i
c
y
"
,
 
i
c
o
n
:
 
<
G
l
o
b
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
F
u
l
l
P
o
l
i
c
y
 
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
 
E
n
g
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
W
h
y
 
i
s
 
f
u
l
l
 
j
i
t
t
e
r
 
s
t
r
i
c
t
l
y
 
b
e
t
t
e
r
 
t
h
a
n
 
e
x
p
o
n
e
n
t
i
a
l
 
b
a
c
k
o
f
f
 
a
l
o
n
e
 
f
o
r
 
r
e
t
r
i
e
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
R
a
n
d
o
m
 
f
e
e
l
s
 
n
i
c
e
r
.
"
,


 
 
 
 
 
 
 
 
"
E
x
p
o
n
e
n
t
i
a
l
 
b
a
c
k
o
f
f
 
s
t
i
l
l
 
s
y
n
c
h
r
o
n
i
z
e
s
 
r
e
t
r
i
e
s
:
 
1
0
0
0
 
c
l
i
e
n
t
s
 
r
e
t
r
y
 
a
t
 
t
=
1
,
 
t
=
2
,
 
t
=
4
 
—
 
a
l
l
 
t
o
g
e
t
h
e
r
.
 
J
i
t
t
e
r
 
d
i
s
s
o
l
v
e
s
 
t
h
o
s
e
 
s
p
i
k
e
s
 
i
n
t
o
 
a
 
u
n
i
f
o
r
m
 
d
i
s
t
r
i
b
u
t
i
o
n
.
"
,


 
 
 
 
 
 
 
 
"
J
i
t
t
e
r
 
i
s
 
f
a
s
t
e
r
.
"
,


 
 
 
 
 
 
 
 
"
I
t
 
u
s
e
s
 
l
e
s
s
 
m
e
m
o
r
y
.
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
T
h
e
 
t
h
u
n
d
e
r
i
n
g
 
h
e
r
d
 
i
s
s
u
e
 
i
s
n
'
t
 
s
o
l
v
e
d
 
b
y
 
s
p
a
c
i
n
g
 
r
e
t
r
i
e
s
 
—
 
i
t
'
s
 
s
o
l
v
e
d
 
b
y
 
d
e
s
y
n
c
h
r
o
n
i
z
i
n
g
 
t
h
e
m
.
 
E
x
p
o
n
e
n
t
i
a
l
 
b
a
c
k
o
f
f
 
s
p
a
c
e
s
 
b
u
t
 
d
o
e
s
n
'
t
 
d
e
s
y
n
c
h
r
o
n
i
z
e
.
 
R
a
n
d
o
m
 
j
i
t
t
e
r
 
d
o
e
s
 
b
o
t
h
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
Y
o
u
 
r
e
t
r
y
 
a
 
n
o
n
-
i
d
e
m
p
o
t
e
n
t
 
P
O
S
T
 
t
h
a
t
 
s
u
c
c
e
e
d
e
d
 
b
u
t
 
t
h
e
 
r
e
s
p
o
n
s
e
 
w
a
s
 
l
o
s
t
.
 
W
h
a
t
 
h
a
p
p
e
n
s
 
w
i
t
h
o
u
t
 
i
d
e
m
p
o
t
e
n
c
y
 
k
e
y
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
N
o
t
h
i
n
g
.
"
,
 
"
T
h
e
 
a
c
t
i
o
n
 
r
u
n
s
 
t
w
i
c
e
 
—
 
d
u
p
l
i
c
a
t
e
 
c
h
a
r
g
e
,
 
d
u
p
l
i
c
a
t
e
 
e
m
a
i
l
,
 
d
u
p
l
i
c
a
t
e
 
b
o
o
k
i
n
g
.
"
,
 
"
T
h
e
 
r
e
t
r
y
 
f
a
i
l
s
 
s
i
l
e
n
t
l
y
.
"
,
 
"
T
h
e
 
s
e
r
v
e
r
 
d
e
t
e
c
t
s
 
i
t
.
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
W
i
t
h
o
u
t
 
a
n
 
i
d
e
m
p
o
t
e
n
c
y
 
k
e
y
,
 
t
h
e
 
s
e
r
v
e
r
 
c
a
n
'
t
 
t
e
l
l
 
a
 
r
e
t
r
y
 
a
p
a
r
t
 
f
r
o
m
 
a
 
f
r
e
s
h
 
r
e
q
u
e
s
t
.
 
T
h
i
s
 
i
s
 
e
x
a
c
t
l
y
 
w
h
y
 
p
a
y
m
e
n
t
 
S
D
K
s
 
r
e
q
u
i
r
e
 
i
d
e
m
p
o
t
e
n
c
y
 
k
e
y
s
 
o
n
 
a
l
l
 
r
e
t
r
i
e
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
 
r
e
t
r
y
 
p
o
l
i
c
y
 
h
a
s
 
m
a
x
A
t
t
e
m
p
t
s
=
1
0
 
a
n
d
 
b
a
s
e
=
1
0
0
m
s
 
w
i
t
h
 
f
u
l
l
 
j
i
t
t
e
r
 
c
a
p
 
o
f
 
1
0
s
.
 
W
h
a
t
'
s
 
t
h
e
 
w
o
r
s
t
-
c
a
s
e
 
t
o
t
a
l
 
w
a
i
t
 
t
i
m
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
1
 
s
e
c
o
n
d
"
,
 
"
A
b
o
u
t
 
6
0
-
9
0
 
s
e
c
o
n
d
s
 
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
"
,
 
"
F
o
r
e
v
e
r
"
,
 
"
1
0
0
m
s
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
E
a
c
h
 
r
e
t
r
y
 
c
a
n
 
w
a
i
t
 
u
p
 
t
o
 
t
h
e
 
c
a
p
.
 
1
0
 
a
t
t
e
m
p
t
s
 
×
 
u
p
 
t
o
 
1
0
s
 
=
 
u
p
 
t
o
 
1
0
0
s
 
t
o
t
a
l
 
w
a
i
t
.
 
T
h
i
s
 
i
s
 
w
h
y
 
y
o
u
 
a
l
s
o
 
s
e
t
 
a
 
T
O
T
A
L
 
t
i
m
e
o
u
t
 
—
 
o
t
h
e
r
w
i
s
e
 
a
 
c
h
a
t
t
y
 
d
o
w
n
s
t
r
e
a
m
 
b
l
o
c
k
s
 
t
h
e
 
u
s
e
r
 
f
o
r
 
m
i
n
u
t
e
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
W
h
i
c
h
 
o
f
 
t
h
e
s
e
 
s
h
o
u
l
d
 
N
E
V
E
R
 
b
e
 
r
e
t
r
i
e
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
A
 
5
0
0
 
f
r
o
m
 
t
h
e
 
s
e
r
v
e
r
"
,


 
 
 
 
 
 
 
 
"
A
 
n
e
t
w
o
r
k
 
t
i
m
e
o
u
t
 
o
n
 
a
 
G
E
T
"
,


 
 
 
 
 
 
 
 
"
A
 
4
0
0
 
B
a
d
 
R
e
q
u
e
s
t
 
—
 
t
h
e
 
c
l
i
e
n
t
 
i
s
 
w
r
o
n
g
,
 
r
e
t
r
y
i
n
g
 
w
o
n
'
t
 
f
i
x
 
i
t
"
,


 
 
 
 
 
 
 
 
"
A
 
5
0
3
 
S
e
r
v
i
c
e
 
U
n
a
v
a
i
l
a
b
l
e
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
4
x
x
 
c
o
d
e
s
 
(
e
x
c
e
p
t
 
4
0
8
 
R
e
q
u
e
s
t
 
T
i
m
e
o
u
t
 
a
n
d
 
4
2
9
 
T
o
o
 
M
a
n
y
 
R
e
q
u
e
s
t
s
)
 
s
i
g
n
a
l
 
c
l
i
e
n
t
 
e
r
r
o
r
.
 
R
e
t
r
y
i
n
g
 
t
h
e
m
 
j
u
s
t
 
w
a
s
t
e
s
 
t
i
m
e
.
 
5
x
x
 
a
n
d
 
c
o
n
n
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
s
 
a
r
e
 
t
y
p
i
c
a
l
l
y
 
t
r
a
n
s
i
e
n
t
 
a
n
d
 
w
o
r
t
h
 
r
e
t
r
y
i
n
g
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
E
n
g
i
n
e
e
r
i
n
g
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
R
e
t
r
i
e
s
,
 
T
i
m
e
o
u
t
s
,
 
J
i
t
t
e
r
"


 
 
 
 
 
 
l
e
v
e
l
=
{
6
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
2
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
T
h
e
 
'
h
o
w
 
d
o
 
y
o
u
 
h
a
n
d
l
e
 
a
 
f
l
a
k
y
 
d
o
w
n
s
t
r
e
a
m
'
 
q
u
e
s
t
i
o
n
'
s
 
c
o
r
r
e
c
t
 
a
n
s
w
e
r
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


