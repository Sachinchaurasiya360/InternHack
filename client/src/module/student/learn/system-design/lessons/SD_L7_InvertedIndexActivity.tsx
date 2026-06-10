
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
 
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
,
 
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
 
F
i
l
e
T
e
x
t
,
 
G
l
o
b
e
,
 
S
e
a
r
c
h
 
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
T
h
e
 
d
a
t
a
 
s
t
r
u
c
t
u
r
e
 
t
h
a
t
 
p
o
w
e
r
s
 
e
v
e
r
y
 
s
e
a
r
c
h
 
b
a
r
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
n
 
<
b
>
i
n
v
e
r
t
e
d
 
i
n
d
e
x
<
/
b
>
 
m
a
p
s
 
e
a
c
h
 
t
e
r
m
 
t
o
 
t
h
e
 
l
i
s
t
 
o
f
 
d
o
c
u
m
e
n
t
s
 
c
o
n
t
a
i
n
i
n
g
 
i
t
.
 
T
h
e


 
 
 
 
 
 
 
 
o
p
p
o
s
i
t
e
 
o
f
 
a
 
f
o
r
w
a
r
d
 
i
n
d
e
x
 
(
d
o
c
 
→
 
t
e
r
m
s
)
,
 
i
t
&
r
s
q
u
o
;
s
 
t
h
e
 
r
e
a
s
o
n
 
G
o
o
g
l
e
 
c
a
n
 
s
e
a
r
c
h
 
b
i
l
l
i
o
n
s


 
 
 
 
 
 
 
 
o
f
 
p
a
g
e
s
 
i
n
 
0
.
3
 
s
e
c
o
n
d
s
.
 
E
v
e
r
y
 
d
o
c
u
m
e
n
t
 
i
s
 
t
o
k
e
n
i
z
e
d
 
o
n
c
e
 
a
t
 
w
r
i
t
e
-
t
i
m
e
;
 
q
u
e
r
i
e
s
 
b
e
c
o
m
e


 
 
 
 
 
 
 
 
c
h
e
a
p
 
i
n
t
e
r
s
e
c
t
i
o
n
s
 
o
f
 
p
r
e
-
b
u
i
l
t
 
l
i
s
t
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
b
-
6
"
>


 
 
 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
n
a
m
e
:
 
"
F
o
r
w
a
r
d
 
i
n
d
e
x
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
,


 
 
 
 
 
 
 
 
 
 
 
 
e
x
:
 
"
d
o
c
-
1
 
→
 
[
'
p
y
t
h
o
n
'
,
 
'
w
e
b
'
,
 
'
f
r
a
m
e
w
o
r
k
'
]
"
,


 
 
 
 
 
 
 
 
 
 
 
 
w
h
y
:
 
"
N
a
t
u
r
a
l
 
s
h
a
p
e
 
b
u
t
 
u
s
e
l
e
s
s
 
f
o
r
 
s
e
a
r
c
h
 
—
 
y
o
u
'
d
 
s
c
a
n
 
e
v
e
r
y
 
d
o
c
 
t
o
 
f
i
n
d
 
w
h
i
c
h
 
o
n
e
s
 
c
o
n
t
a
i
n
 
'
p
y
t
h
o
n
'
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
I
n
v
e
r
t
e
d
 
i
n
d
e
x
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


 
 
 
 
 
 
 
 
 
 
 
 
e
x
:
 
"
'
p
y
t
h
o
n
'
 
→
 
[
d
o
c
-
1
,
 
d
o
c
-
7
,
 
d
o
c
-
4
2
]
"
,


 
 
 
 
 
 
 
 
 
 
 
 
w
h
y
:
 
"
L
o
o
k
 
u
p
 
t
h
e
 
t
e
r
m
 
o
n
c
e
,
 
g
e
t
 
e
v
e
r
y
 
m
a
t
c
h
i
n
g
 
d
o
c
.
 
T
w
o
-
t
e
r
m
 
q
u
e
r
y
 
=
 
i
n
t
e
r
s
e
c
t
 
t
w
o
 
l
i
s
t
s
.
 
O
(
m
a
t
c
h
e
s
)
,
 
n
o
t
 
O
(
c
o
r
p
u
s
)
.
"
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
]
.
m
a
p
(
(
p
,
 
i
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
p
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
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
2
 
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
 
d
e
l
a
y
:
 
i
 
*
 
0
.
1
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
p
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
p
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
 
p
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
p
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
p
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
p
.
e
x
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
p
.
w
h
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
8
 
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
[


 
 
 
 
 
 
 
 
 
 
{
 
k
:
 
"
T
o
k
e
n
i
z
e
"
,
 
v
:
 
"
S
p
l
i
t
 
t
e
x
t
 
i
n
t
o
 
t
e
r
m
s
.
 
'
T
h
e
 
q
u
i
c
k
 
b
r
o
w
n
 
f
o
x
'
 
→
 
[
'
t
h
e
'
,
 
'
q
u
i
c
k
'
,
 
'
b
r
o
w
n
'
,
 
'
f
o
x
'
]
.
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
k
:
 
"
N
o
r
m
a
l
i
z
e
"
,
 
v
:
 
"
L
o
w
e
r
c
a
s
e
,
 
r
e
m
o
v
e
 
s
t
o
p
w
o
r
d
s
 
(
'
t
h
e
'
,
 
'
a
'
)
,
 
s
t
e
m
 
(
'
r
u
n
n
i
n
g
'
 
→
 
'
r
u
n
'
)
.
 
S
m
a
l
l
e
r
 
i
n
d
e
x
,
 
b
e
t
t
e
r
 
r
e
c
a
l
l
.
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
k
:
 
"
P
o
s
t
i
n
g
 
l
i
s
t
"
,
 
v
:
 
"
F
o
r
 
e
a
c
h
 
t
e
r
m
,
 
t
h
e
 
s
o
r
t
e
d
 
l
i
s
t
 
o
f
 
d
o
c
 
I
D
s
 
t
h
a
t
 
c
o
n
t
a
i
n
 
i
t
.
 
O
f
t
e
n
 
w
i
t
h
 
p
o
s
i
t
i
o
n
s
 
a
n
d
 
t
e
r
m
 
f
r
e
q
u
e
n
c
y
 
f
o
r
 
r
a
n
k
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
4
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


 
 
 
 
 
 
 
 
 
 
<
b
>
L
u
c
e
n
e
<
/
b
>
 
i
s
 
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
 
i
n
v
e
r
t
e
d
-
i
n
d
e
x
 
l
i
b
r
a
r
y
.
 
<
b
>
E
l
a
s
t
i
c
s
e
a
r
c
h
<
/
b
>
,


 
 
 
 
 
 
 
 
 
 
<
b
>
 
O
p
e
n
S
e
a
r
c
h
<
/
b
>
,
 
a
n
d
 
<
b
>
S
o
l
r
<
/
b
>
 
a
l
l
 
w
r
a
p
 
L
u
c
e
n
e
.
 
<
b
>
P
o
s
t
g
r
e
s
<
/
b
>
 
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
t
e
x
t


 
 
 
 
 
 
 
 
 
 
s
e
a
r
c
h
 
w
i
t
h
 
G
I
N
 
i
n
d
e
x
e
s
 
(
a
n
 
i
n
v
e
r
t
e
d
 
i
n
d
e
x
 
u
n
d
e
r
 
t
h
e
 
h
o
o
d
)
.
 
<
b
>
S
Q
L
i
t
e
<
/
b
>
 
h
a
s
 
F
T
S
5
.


 
 
 
 
 
 
 
 
 
 
S
a
m
e
 
i
d
e
a
 
e
v
e
r
y
w
h
e
r
e
:
 
e
a
c
h
 
t
o
k
e
n
 
p
o
i
n
t
s
 
a
t
 
t
h
e
 
d
o
c
s
 
t
h
a
t
 
c
o
n
t
a
i
n
 
i
t
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
 
L
i
v
e
 
t
o
k
e
n
i
z
a
t
i
o
n
 
+
 
q
u
e
r
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




c
o
n
s
t
 
D
O
C
S
 
=
 
[


 
 
{
 
i
d
:
 
1
,
 
t
i
t
l
e
:
 
"
P
y
t
h
o
n
 
W
e
b
 
F
r
a
m
e
w
o
r
k
s
"
,
 
t
e
x
t
:
 
"
D
j
a
n
g
o
 
a
n
d
 
F
l
a
s
k
 
a
r
e
 
p
o
p
u
l
a
r
 
P
y
t
h
o
n
 
w
e
b
 
f
r
a
m
e
w
o
r
k
s
 
f
o
r
 
b
u
i
l
d
i
n
g
 
w
e
b
 
a
p
p
s
.
"
 
}
,


 
 
{
 
i
d
:
 
2
,
 
t
i
t
l
e
:
 
"
J
a
v
a
S
c
r
i
p
t
 
o
n
 
t
h
e
 
S
e
r
v
e
r
"
,
 
t
e
x
t
:
 
"
N
o
d
e
.
j
s
 
l
e
t
s
 
y
o
u
 
w
r
i
t
e
 
s
e
r
v
e
r
-
s
i
d
e
 
J
a
v
a
S
c
r
i
p
t
 
w
i
t
h
 
f
r
a
m
e
w
o
r
k
s
 
l
i
k
e
 
E
x
p
r
e
s
s
.
"
 
}
,


 
 
{
 
i
d
:
 
3
,
 
t
i
t
l
e
:
 
"
P
y
t
h
o
n
 
f
o
r
 
D
a
t
a
"
,
 
t
e
x
t
:
 
"
P
y
t
h
o
n
 
w
i
t
h
 
p
a
n
d
a
s
 
a
n
d
 
n
u
m
p
y
 
i
s
 
t
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
 
d
a
t
a
 
a
n
a
l
y
s
i
s
 
a
n
d
 
M
L
.
"
 
}
,


 
 
{
 
i
d
:
 
4
,
 
t
i
t
l
e
:
 
"
G
o
 
M
i
c
r
o
s
e
r
v
i
c
e
s
"
,
 
t
e
x
t
:
 
"
G
o
 
i
s
 
a
 
p
o
p
u
l
a
r
 
l
a
n
g
u
a
g
e
 
f
o
r
 
b
u
i
l
d
i
n
g
 
f
a
s
t
,
 
c
o
n
c
u
r
r
e
n
t
 
m
i
c
r
o
s
e
r
v
i
c
e
s
.
"
 
}
,


 
 
{
 
i
d
:
 
5
,
 
t
i
t
l
e
:
 
"
W
e
b
 
P
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
"
,
 
t
e
x
t
:
 
"
C
a
c
h
i
n
g
 
a
n
d
 
C
D
N
 
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
 
i
m
p
r
o
v
e
 
w
e
b
 
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
 
f
o
r
 
u
s
e
r
s
 
w
o
r
l
d
w
i
d
e
.
"
 
}
,


]
;




c
o
n
s
t
 
S
T
O
P
W
O
R
D
S
 
=
 
n
e
w
 
S
e
t
(
[
"
a
"
,
 
"
a
n
"
,
 
"
t
h
e
"
,
 
"
a
n
d
"
,
 
"
o
r
"
,
 
"
f
o
r
"
,
 
"
o
f
"
,
 
"
t
o
"
,
 
"
i
n
"
,
 
"
o
n
"
,
 
"
i
s
"
,
 
"
a
r
e
"
,
 
"
w
i
t
h
"
,
 
"
l
i
k
e
"
]
)
;




f
u
n
c
t
i
o
n
 
t
o
k
e
n
i
z
e
(
s
:
 
s
t
r
i
n
g
)
:
 
s
t
r
i
n
g
[
]
 
{


 
 
r
e
t
u
r
n
 
s


 
 
 
 
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
r
e
p
l
a
c
e
(
/
[
^
a
-
z
0
-
9
\
s
]
/
g
,
 
"
 
"
)


 
 
 
 
.
s
p
l
i
t
(
/
\
s
+
/
)


 
 
 
 
.
f
i
l
t
e
r
(
(
t
)
 
=
>
 
t
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
 
!
S
T
O
P
W
O
R
D
S
.
h
a
s
(
t
)
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
u
i
l
d
I
n
d
e
x
(
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
 
n
u
m
b
e
r
[
]
>
 
{


 
 
c
o
n
s
t
 
i
d
x
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
[
]
>
 
=
 
{
}
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
 
d
 
o
f
 
D
O
C
S
)
 
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
 
n
e
w
 
S
e
t
(
t
o
k
e
n
i
z
e
(
`
$
{
d
.
t
i
t
l
e
}
 
$
{
d
.
t
e
x
t
}
`
)
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
f
 
t
o
k
e
n
s
)
 
{


 
 
 
 
 
 
i
f
 
(
!
i
d
x
[
t
]
)
 
i
d
x
[
t
]
 
=
 
[
]
;


 
 
 
 
 
 
i
d
x
[
t
]
.
p
u
s
h
(
d
.
i
d
)
;


 
 
 
 
}


 
 
}


 
 
f
o
r
 
(
c
o
n
s
t
 
k
 
o
f
 
O
b
j
e
c
t
.
k
e
y
s
(
i
d
x
)
)
 
i
d
x
[
k
]
.
s
o
r
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
 
i
d
x
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
i
v
e
I
n
d
e
x
(
)
 
{


 
 
c
o
n
s
t
 
[
q
u
e
r
y
,
 
s
e
t
Q
u
e
r
y
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
p
y
t
h
o
n
 
w
e
b
"
)
;


 
 
c
o
n
s
t
 
i
n
d
e
x
 
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
I
n
d
e
x
(
)
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
 
{
 
q
u
e
r
y
T
e
r
m
s
,
 
m
a
t
c
h
e
s
,
 
i
n
t
e
r
s
e
c
t
i
o
n
 
}
 
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
 
{


 
 
 
 
c
o
n
s
t
 
q
T
e
r
m
s
 
=
 
t
o
k
e
n
i
z
e
(
q
u
e
r
y
)
;


 
 
 
 
c
o
n
s
t
 
m
 
=
 
q
T
e
r
m
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
 
?
 
[
]
 
:
 
q
T
e
r
m
s
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
 
(
{
 
t
e
r
m
:
 
t
,
 
d
o
c
s
:
 
i
n
d
e
x
[
t
]
 
?
?
 
[
]
 
}
)
)
;


 
 
 
 
l
e
t
 
i
n
t
e
r
s
e
c
t
:
 
n
u
m
b
e
r
[
]
 
=
 
[
]
;


 
 
 
 
i
f
 
(
m
.
l
e
n
g
t
h
 
>
 
0
)
 
{


 
 
 
 
 
 
l
e
t
 
r
e
s
u
l
t
 
=
 
n
e
w
 
S
e
t
(
m
[
0
]
.
d
o
c
s
)
;


 
 
 
 
 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
1
;
 
i
 
<
 
m
.
l
e
n
g
t
h
;
 
i
+
+
)
 
{


 
 
 
 
 
 
 
 
r
e
s
u
l
t
 
=
 
n
e
w
 
S
e
t
(
[
.
.
.
r
e
s
u
l
t
]
.
f
i
l
t
e
r
(
(
i
d
)
 
=
>
 
m
[
i
]
.
d
o
c
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
i
d
)
)
)
;


 
 
 
 
 
 
}


 
 
 
 
 
 
i
n
t
e
r
s
e
c
t
 
=
 
A
r
r
a
y
.
f
r
o
m
(
r
e
s
u
l
t
)
.
s
o
r
t
(
(
a
,
 
b
)
 
=
>
 
a
 
-
 
b
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
 
q
u
e
r
y
T
e
r
m
s
:
 
q
T
e
r
m
s
,
 
m
a
t
c
h
e
s
:
 
m
,
 
i
n
t
e
r
s
e
c
t
i
o
n
:
 
i
n
t
e
r
s
e
c
t
 
}
;


 
 
}
,
 
[
q
u
e
r
y
,
 
i
n
d
e
x
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
T
y
p
e
 
a
 
q
u
e
r
y
.
 
W
a
t
c
h
 
t
h
e
 
i
n
d
e
x
 
l
i
g
h
t
 
u
p
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


 
 
 
 
 
 
 
 
F
i
v
e
 
s
h
o
r
t
 
d
o
c
u
m
e
n
t
s
.
 
E
a
c
h
 
t
e
r
m
 
i
n
 
t
h
e
 
s
e
a
r
c
h
 
b
a
r
 
i
s
 
a
 
s
e
p
a
r
a
t
e
 
p
o
s
t
i
n
g
 
l
i
s
t
.
 
T
h
e
 
r
e
s
u
l
t


 
 
 
 
 
 
 
 
i
s
 
t
h
e
 
i
n
t
e
r
s
e
c
t
i
o
n
 
o
f
 
t
h
o
s
e
 
l
i
s
t
s
 
—
 
t
h
e
 
d
o
c
s
 
c
o
n
t
a
i
n
i
n
g
 
e
v
e
r
y
 
q
u
e
r
y
 
t
e
r
m
.


 
 
 
 
 
 
<
/
p
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
b
-
5
"
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
 
1
0
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
0
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
S
e
a
r
c
h
 
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
 
/
>


 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
q
u
e
r
y
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
Q
u
e
r
y
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
s
e
a
r
c
h
…
"


 
 
 
 
 
 
 
 
 
 
 
 
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
 
"
t
r
a
n
s
p
a
r
e
n
t
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
n
o
n
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
u
t
l
i
n
e
:
 
"
n
o
n
e
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
9
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
{
q
u
e
r
y
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
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
 
s
e
t
Q
u
e
r
y
(
"
"
)
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
t
r
a
n
s
p
a
r
e
n
t
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
n
o
n
e
"
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
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
e
a
r


 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
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
T
o
p
:
 
8
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
o
k
e
n
s
:
 
{
q
u
e
r
y
T
e
r
m
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
 
?
 
<
i
 
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
(
e
m
p
t
y
)
<
/
i
>
 
:
 
q
u
e
r
y
T
e
r
m
s
.
m
a
p
(
(
t
,
 
i
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
t
}
 
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
i
 
>
 
0
 
?
 
"
 
·
 
"
 
:
 
"
"
}
{
t
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
4
"
>


 
 
 
 
 
 
 
 
{
/
*
 
P
o
s
t
i
n
g
 
l
i
s
t
s
 
*
/
}


 
 
 
 
 
 
 
 
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
 
1
8
 
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
 
N
E
U
T
R
A
L
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
 
1
0
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
P
O
S
T
I
N
G
 
L
I
S
T
S
 
·
 
p
e
r
 
q
u
e
r
y
 
t
e
r
m


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
{
m
a
t
c
h
e
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
 
?
 
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
,
 
f
o
n
t
S
t
y
l
e
:
 
"
i
t
a
l
i
c
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
 
t
o
 
l
o
o
k
 
u
p
 
p
o
s
t
i
n
g
 
l
i
s
t
s


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
 
:
 
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
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
m
o
d
e
=
"
p
o
p
L
a
y
o
u
t
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
a
t
c
h
e
s
.
m
a
p
(
(
m
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
m
.
t
e
r
m
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
y
o
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
x
:
 
-
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
 
x
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
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
 
x
:
 
8
 
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
2
5
 
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
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
1
2
0
p
x
 
1
f
r
"
,
 
g
a
p
:
 
1
0
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
8
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
:
 
S
D
 
}
}
>
{
m
.
t
e
r
m
}
<
/
s
p
a
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
 
g
a
p
:
 
4
,
 
f
l
e
x
W
r
a
p
:
 
"
w
r
a
p
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
.
d
o
c
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
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
,
 
f
o
n
t
S
t
y
l
e
:
 
"
i
t
a
l
i
c
"
 
}
}
>
(
n
o
 
m
a
t
c
h
e
s
)
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
.
d
o
c
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
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
y
o
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
c
a
l
e
:
 
0
.
6
,
 
o
p
a
c
i
t
y
:
 
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
 
s
c
a
l
e
:
 
1
,
 
o
p
a
c
i
t
y
:
 
1
 
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
 
t
y
p
e
:
 
"
s
p
r
i
n
g
"
,
 
s
t
i
f
f
n
e
s
s
:
 
4
0
0
,
 
d
a
m
p
i
n
g
:
 
2
2
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
3
p
x
 
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
 
i
n
t
e
r
s
e
c
t
i
o
n
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
i
d
)
 
?
 
`
$
{
S
D
}
3
3
`
 
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
1
2
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
i
n
t
e
r
s
e
c
t
i
o
n
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
i
d
)
 
?
 
S
D
 
:
 
N
E
U
T
R
A
L
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
i
n
t
e
r
s
e
c
t
i
o
n
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
i
d
)
 
?
 
`
$
{
S
D
}
5
5
`
 
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
2
)
"
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
o
c
-
{
i
d
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
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
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
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
 
 
{
/
*
 
R
e
s
u
l
t
 
d
o
c
u
m
e
n
t
s
 
*
/
}


 
 
 
 
 
 
 
 
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
 
1
8
 
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
 
N
E
U
T
R
A
L
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
 
1
0
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
R
E
S
U
L
T
S
 
·
 
{
i
n
t
e
r
s
e
c
t
i
o
n
.
l
e
n
g
t
h
}
 
m
a
t
c
h
{
i
n
t
e
r
s
e
c
t
i
o
n
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
 
1
 
?
 
"
"
 
:
 
"
e
s
"
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
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
D
O
C
S
.
m
a
p
(
(
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
 
m
a
t
c
h
e
d
 
=
 
i
n
t
e
r
s
e
c
t
i
o
n
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
d
.
i
d
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
m
a
t
c
h
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
 
!
m
a
t
c
h
e
d
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
d
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
y
o
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
6
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
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
 
-
6
 
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
2
5
 
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
0
p
x
 
1
2
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
 
m
a
t
c
h
e
d
 
?
 
`
$
{
S
D
}
1
0
`
 
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
m
a
t
c
h
e
d
 
?
 
`
$
{
S
D
}
5
5
`
 
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
2
)
"
}
`
 
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
 
8
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
 
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
i
l
e
T
e
x
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
3
.
5
 
h
-
3
.
5
"
 
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
 
m
a
t
c
h
e
d
 
?
 
S
D
 
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
d
o
c
-
{
d
.
i
d
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
8
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
:
 
m
a
t
c
h
e
d
 
?
 
S
D
 
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
d
.
t
i
t
l
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
7
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
4
5
 
}
}
>
{
h
i
g
h
l
i
g
h
t
T
e
r
m
s
(
d
.
t
e
x
t
,
 
q
u
e
r
y
T
e
r
m
s
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
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


 
 
 
 
 
 
 
 
 
 
K
E
Y
 
I
N
S
I
G
H
T


 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
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
n
v
e
r
t
e
d
 
i
n
d
e
x
,
 
t
h
i
s
 
q
u
e
r
y
 
w
o
u
l
d
 
s
c
a
n
 
a
l
l
 
5
 
d
o
c
s
.
 
W
i
t
h
 
i
t
,
 
y
o
u
 
r
e
a
d
 
2
 
s
h
o
r
t


 
 
 
 
 
 
 
 
p
o
s
t
i
n
g
 
l
i
s
t
s
 
a
n
d
 
i
n
t
e
r
s
e
c
t
 
—
 
O
(
m
a
t
c
h
e
s
)
,
 
n
o
t
 
O
(
c
o
r
p
u
s
)
.
 
A
t
 
1
0
0
M
 
d
o
c
s
,
 
t
h
e
 
d
i
f
f
e
r
e
n
c
e
 
i
s


 
 
 
 
 
 
 
 
b
e
t
w
e
e
n
 
f
e
a
s
i
b
l
e
 
a
n
d
 
i
m
p
o
s
s
i
b
l
e
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
 
h
i
g
h
l
i
g
h
t
T
e
r
m
s
(
t
e
x
t
:
 
s
t
r
i
n
g
,
 
t
e
r
m
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
:
 
R
e
a
c
t
.
R
e
a
c
t
N
o
d
e
 
{


 
 
i
f
 
(
t
e
r
m
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
 
t
e
x
t
;


 
 
c
o
n
s
t
 
r
e
g
e
x
 
=
 
n
e
w
 
R
e
g
E
x
p
(
`
\
\
b
(
$
{
t
e
r
m
s
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
r
e
p
l
a
c
e
(
/
[
^
\
w
]
/
g
,
 
"
"
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
.
j
o
i
n
(
"
|
"
)
}
)
\
\
b
`
,
 
"
g
i
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
t
s
 
=
 
t
e
x
t
.
s
p
l
i
t
(
r
e
g
e
x
)
;


 
 
r
e
t
u
r
n
 
p
a
r
t
s
.
m
a
p
(
(
p
,
 
i
)
 
=
>


 
 
 
 
r
e
g
e
x
.
t
e
s
t
(
p
)
 
?
 
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
i
}
 
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
p
}
<
/
s
p
a
n
>


 
 
 
 
)
 
:
 
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
i
}
>
{
p
}
<
/
s
p
a
n
>


 
 
 
 
)
,


 
 
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
 
3
 
-
 
I
n
d
e
x
 
d
e
s
i
g
n
 
k
n
o
b
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
K
N
O
B
S
 
=
 
[


 
 
{
 
k
:
 
"
S
t
e
m
m
i
n
g
"
,
 
v
:
 
"
R
e
d
u
c
e
 
'
r
u
n
n
i
n
g
'
,
 
'
r
a
n
'
,
 
'
r
u
n
s
'
 
→
 
'
r
u
n
'
.
 
B
i
g
g
e
r
 
r
e
c
a
l
l
 
b
u
t
 
l
o
s
e
s
 
t
e
n
s
e
;
 
u
s
u
a
l
l
y
 
a
 
w
i
n
 
f
o
r
 
p
r
o
s
e
.
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
 
}
,


 
 
{
 
k
:
 
"
S
t
o
p
w
o
r
d
s
"
,
 
v
:
 
"
D
r
o
p
 
v
e
r
y
 
c
o
m
m
o
n
 
t
e
r
m
s
 
(
'
t
h
e
'
,
 
'
a
'
)
.
 
S
m
a
l
l
e
r
 
i
n
d
e
x
,
 
f
a
s
t
e
r
 
q
u
e
r
i
e
s
;
 
l
o
s
e
 
p
h
r
a
s
e
 
s
e
a
r
c
h
e
s
 
t
h
a
t
 
n
e
e
d
 
t
h
e
m
.
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
 
}
,


 
 
{
 
k
:
 
"
S
y
n
o
n
y
m
s
"
,
 
v
:
 
"
I
n
d
e
x
 
'
N
Y
C
'
 
a
l
o
n
g
s
i
d
e
 
'
N
e
w
 
Y
o
r
k
'
.
 
I
m
p
r
o
v
e
s
 
r
e
c
a
l
l
 
b
u
t
 
b
l
o
a
t
s
 
l
i
s
t
s
.
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
 
}
,


 
 
{
 
k
:
 
"
n
-
g
r
a
m
s
"
,
 
v
:
 
"
I
n
d
e
x
 
s
u
b
-
s
t
r
i
n
g
s
 
(
'
q
u
i
c
k
'
 
→
 
'
q
u
i
'
,
 
'
u
i
c
'
,
 
'
i
c
k
'
)
.
 
E
n
a
b
l
e
s
 
s
u
b
s
t
r
i
n
g
 
s
e
a
r
c
h
 
a
t
 
t
h
e
 
c
o
s
t
 
o
f
 
h
u
g
e
 
i
n
d
e
x
e
s
.
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
 
}
,


 
 
{
 
k
:
 
"
P
h
r
a
s
e
 
/
 
p
o
s
i
t
i
o
n
"
,
 
v
:
 
"
S
t
o
r
e
 
p
o
s
i
t
i
o
n
s
 
i
n
s
i
d
e
 
d
o
c
s
 
s
o
 
'
n
e
w
 
y
o
r
k
'
 
m
a
t
c
h
e
s
 
p
h
r
a
s
e
s
,
 
n
o
t
 
j
u
s
t
 
b
o
t
h
 
t
e
r
m
s
 
a
n
y
w
h
e
r
e
.
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
 
}
,


 
 
{
 
k
:
 
"
C
o
m
p
r
e
s
s
i
o
n
"
,
 
v
:
 
"
P
o
s
t
i
n
g
 
l
i
s
t
s
 
a
r
e
 
m
o
s
t
l
y
 
i
n
c
r
e
a
s
i
n
g
 
i
n
t
e
g
e
r
s
 
—
 
d
e
l
t
a
-
e
n
c
o
d
e
 
t
h
e
m
.
 
5
0
%
+
 
s
m
a
l
l
e
r
 
i
n
d
e
x
e
s
 
f
o
r
 
f
r
e
e
.
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
 
K
n
o
b
s
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
K
n
o
b
s
 
e
v
e
r
y
 
s
e
a
r
c
h
 
i
n
d
e
x
 
h
a
s
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


 
 
 
 
 
 
 
 
P
i
c
k
i
n
g
 
t
h
e
s
e
 
w
e
l
l
 
s
e
p
a
r
a
t
e
s
 
a
 
g
o
o
d
 
s
e
a
r
c
h
 
i
n
d
e
x
 
f
r
o
m
 
a
 
s
l
o
w
,
 
i
r
r
e
l
e
v
a
n
t
 
o
n
e
.
 
E
v
e
r
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
 
s
e
a
r
c
h
 
e
n
g
i
n
e
 
e
x
p
o
s
e
s
 
m
o
s
t
 
o
f
 
t
h
e
s
e
 
a
s
 
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
 
a
n
a
l
y
z
e
r
s
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
0
6
 
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
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
K
N
O
B
S
.
m
a
p
(
(
k
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
k
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


 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
H
o
v
e
r
=
{
{
 
y
:
 
-
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
 
t
y
p
e
:
 
"
s
p
r
i
n
g
"
,
 
s
t
i
f
f
n
e
s
s
:
 
4
0
0
,
 
d
a
m
p
i
n
g
:
 
2
5
 
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
 
k
.
c
o
l
o
r
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
k
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
k
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
7
_
I
n
v
e
r
t
e
d
I
n
d
e
x
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
l
i
v
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
L
i
v
e
 
S
e
a
r
c
h
"
,
 
i
c
o
n
:
 
<
S
e
a
r
c
h
 
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
i
v
e
I
n
d
e
x
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
k
n
o
b
s
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
d
e
x
 
K
n
o
b
s
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
K
n
o
b
s
 
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
 
a
n
 
i
n
v
e
r
t
e
d
 
i
n
d
e
x
 
f
a
s
t
e
r
 
t
h
a
n
 
s
c
a
n
n
i
n
g
 
e
v
e
r
y
 
d
o
c
u
m
e
n
t
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
I
t
 
c
o
m
p
r
e
s
s
e
s
 
d
a
t
a
.
"
,


 
 
 
 
 
 
 
 
"
E
a
c
h
 
t
e
r
m
 
h
a
s
 
a
 
p
r
e
-
b
u
i
l
t
 
s
o
r
t
e
d
 
l
i
s
t
 
o
f
 
d
o
c
 
I
D
s
.
 
Q
u
e
r
y
 
=
 
l
o
o
k
 
u
p
 
t
e
r
m
 
l
i
s
t
s
 
a
n
d
 
i
n
t
e
r
s
e
c
t
,
 
O
(
m
a
t
c
h
e
s
)
 
n
o
t
 
O
(
c
o
r
p
u
s
)
.
"
,


 
 
 
 
 
 
 
 
"
I
t
'
s
 
s
t
o
r
e
d
 
o
n
 
S
S
D
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
 
R
A
M
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
 
w
h
o
l
e
 
p
o
i
n
t
.
 
A
t
 
i
n
d
e
x
 
t
i
m
e
 
y
o
u
 
d
o
 
t
h
e
 
h
e
a
v
y
 
w
o
r
k
;
 
a
t
 
q
u
e
r
y
 
t
i
m
e
 
y
o
u
 
r
e
a
d
 
s
h
o
r
t
 
p
r
e
-
b
u
i
l
t
 
l
i
s
t
s
.
 
1
0
0
M
 
d
o
c
s
 
×
 
1
µ
s
 
s
c
a
n
 
w
o
u
l
d
 
b
e
 
1
0
0
s
.
 
T
w
o
 
p
o
s
t
i
n
g
 
l
i
s
t
s
 
o
f
 
1
k
 
I
D
s
 
i
n
t
e
r
s
e
c
t
e
d
:
 
m
i
c
r
o
s
e
c
o
n
d
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
 
t
w
o
-
t
e
r
m
 
A
N
D
 
q
u
e
r
y
 
'
p
y
t
h
o
n
 
w
e
b
'
.
 
T
h
e
 
i
n
v
e
r
t
e
d
 
i
n
d
e
x
 
r
e
t
u
r
n
s
:
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
l
 
d
o
c
s
 
c
o
n
t
a
i
n
i
n
g
 
'
p
y
t
h
o
n
'
 
O
R
 
'
w
e
b
'
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
i
n
t
e
r
s
e
c
t
i
o
n
 
o
f
 
t
w
o
 
p
o
s
t
i
n
g
 
l
i
s
t
s
 
—
 
d
o
c
s
 
c
o
n
t
a
i
n
i
n
g
 
B
O
T
H
 
t
e
r
m
s
.
"
,


 
 
 
 
 
 
 
 
"
O
n
l
y
 
t
h
e
 
f
i
r
s
t
 
m
a
t
c
h
.
"
,


 
 
 
 
 
 
 
 
"
R
a
n
d
o
m
 
d
o
c
s
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
A
N
D
 
q
u
e
r
i
e
s
 
i
n
t
e
r
s
e
c
t
.
 
O
R
 
q
u
e
r
i
e
s
 
u
n
i
o
n
.
 
B
o
t
h
 
a
r
e
 
l
i
n
e
a
r
 
i
n
 
t
h
e
 
s
i
z
e
 
o
f
 
t
h
e
 
i
n
p
u
t
 
l
i
s
t
s
,
 
m
u
c
h
 
s
m
a
l
l
e
r
 
t
h
a
n
 
t
h
e
 
c
o
r
p
u
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
S
t
e
m
m
i
n
g
 
r
e
d
u
c
e
s
 
'
r
u
n
n
i
n
g
'
,
 
'
r
a
n
'
,
 
'
r
u
n
s
'
 
t
o
 
'
r
u
n
'
.
 
T
r
a
d
e
-
o
f
f
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
r
a
d
e
-
o
f
f
.
"
,


 
 
 
 
 
 
 
 
"
B
i
g
g
e
r
 
r
e
c
a
l
l
 
(
f
i
n
d
s
 
r
e
l
a
t
e
d
 
t
e
r
m
s
)
 
b
u
t
 
l
o
s
e
s
 
p
r
e
c
i
s
i
o
n
 
w
h
e
n
 
t
e
n
s
e
 
m
a
t
t
e
r
s
.
"
,


 
 
 
 
 
 
 
 
"
F
a
s
t
e
r
 
o
n
l
y
.
"
,


 
 
 
 
 
 
 
 
"
S
m
a
l
l
e
r
 
i
n
d
e
x
 
o
n
l
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
S
t
e
m
m
i
n
g
 
m
a
p
s
 
m
o
r
p
h
o
l
o
g
i
c
a
l
 
v
a
r
i
a
n
t
s
 
t
o
 
o
n
e
 
t
e
r
m
.
 
A
 
s
e
a
r
c
h
 
f
o
r
 
'
r
a
n
'
 
f
i
n
d
s
 
'
r
u
n
n
i
n
g
'
 
t
o
o
 
—
 
u
s
u
a
l
l
y
 
w
h
a
t
 
u
s
e
r
s
 
w
a
n
t
,
 
b
u
t
 
b
a
d
 
f
o
r
 
c
o
d
e
 
s
e
a
r
c
h
 
w
h
e
r
e
 
'
r
u
n
'
 
a
n
d
 
'
r
u
n
s
'
 
a
r
e
 
d
i
f
f
e
r
e
n
t
 
m
e
t
h
o
d
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
y
 
a
r
e
 
p
o
s
t
i
n
g
 
l
i
s
t
s
 
u
s
u
a
l
l
y
 
d
e
l
t
a
-
e
n
c
o
d
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
P
r
e
t
t
i
e
r
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
'
r
e
 
s
o
r
t
e
d
 
i
n
c
r
e
a
s
i
n
g
 
i
n
t
e
g
e
r
s
,
 
s
o
 
d
e
l
t
a
s
 
a
r
e
 
s
m
a
l
l
 
a
n
d
 
c
o
m
p
r
e
s
s
 
t
o
 
a
 
f
r
a
c
t
i
o
n
 
o
f
 
t
h
e
 
r
a
w
 
s
i
z
e
,
 
s
a
v
i
n
g
 
d
i
s
k
 
a
n
d
 
R
A
M
.
"
,


 
 
 
 
 
 
 
 
"
R
e
q
u
i
r
e
d
 
b
y
 
L
u
c
e
n
e
.
"
,


 
 
 
 
 
 
 
 
"
E
n
c
r
y
p
t
i
o
n
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
D
o
c
 
I
D
s
 
i
n
 
a
 
p
o
s
t
i
n
g
 
l
i
s
t
 
a
r
e
 
s
o
r
t
e
d
 
a
s
c
e
n
d
i
n
g
.
 
D
i
f
f
e
r
e
n
c
e
s
 
b
e
t
w
e
e
n
 
a
d
j
a
c
e
n
t
 
I
D
s
 
a
r
e
 
s
m
a
l
l
 
n
u
m
b
e
r
s
 
t
h
a
t
 
v
a
r
i
a
b
l
e
-
b
y
t
e
 
e
n
c
o
d
e
 
i
n
 
1
-
2
 
b
y
t
e
s
 
e
a
c
h
.
 
5
0
-
9
0
%
 
s
i
z
e
 
r
e
d
u
c
t
i
o
n
 
w
i
t
h
 
n
e
g
l
i
g
i
b
l
e
 
d
e
c
o
d
e
 
c
o
s
t
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
I
n
v
e
r
t
e
d
 
I
n
d
e
x
"


 
 
 
 
 
 
l
e
v
e
l
=
{
7
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
1
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
 
d
a
t
a
 
s
t
r
u
c
t
u
r
e
 
b
e
h
i
n
d
 
e
v
e
r
y
 
s
e
a
r
c
h
 
e
n
g
i
n
e
 
—
 
G
o
o
g
l
e
,
 
E
l
a
s
t
i
c
s
e
a
r
c
h
,
 
L
u
c
e
n
e
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


