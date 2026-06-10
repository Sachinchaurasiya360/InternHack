
i
m
p
o
r
t
 
{
 
S
t
r
i
c
t
M
o
d
e
 
}
 
f
r
o
m
 
'
r
e
a
c
t
'


i
m
p
o
r
t
 
{
 
c
r
e
a
t
e
R
o
o
t
,
 
h
y
d
r
a
t
e
R
o
o
t
 
}
 
f
r
o
m
 
'
r
e
a
c
t
-
d
o
m
/
c
l
i
e
n
t
'


i
m
p
o
r
t
 
{
 
G
o
o
g
l
e
O
A
u
t
h
P
r
o
v
i
d
e
r
 
}
 
f
r
o
m
 
'
@
r
e
a
c
t
-
o
a
u
t
h
/
g
o
o
g
l
e
'


i
m
p
o
r
t
 
{
 
Q
u
e
r
y
C
l
i
e
n
t
,
 
Q
u
e
r
y
C
l
i
e
n
t
P
r
o
v
i
d
e
r
 
}
 
f
r
o
m
 
'
@
t
a
n
s
t
a
c
k
/
r
e
a
c
t
-
q
u
e
r
y
'


i
m
p
o
r
t
 
{
 
H
e
l
m
e
t
P
r
o
v
i
d
e
r
 
}
 
f
r
o
m
 
'
r
e
a
c
t
-
h
e
l
m
e
t
-
a
s
y
n
c
'


i
m
p
o
r
t
 
{
 
B
r
o
w
s
e
r
R
o
u
t
e
r
 
}
 
f
r
o
m
 
'
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
'


i
m
p
o
r
t
 
{
 
T
h
e
m
e
P
r
o
v
i
d
e
r
 
}
 
f
r
o
m
 
'
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
T
h
e
m
e
P
r
o
v
i
d
e
r
'


i
m
p
o
r
t
 
{
 
s
e
t
A
u
t
h
Q
u
e
r
y
C
l
i
e
n
t
 
}
 
f
r
o
m
 
'
.
/
l
i
b
/
a
u
t
h
.
s
t
o
r
e
'


i
m
p
o
r
t
 
'
.
/
i
n
d
e
x
.
c
s
s
'


i
m
p
o
r
t
 
A
p
p
 
f
r
o
m
 
'
.
/
A
p
p
.
t
s
x
'




c
o
n
s
t
 
g
o
o
g
l
e
C
l
i
e
n
t
I
d
 
=
 
i
m
p
o
r
t
.
m
e
t
a
.
e
n
v
.
V
I
T
E
_
G
O
O
G
L
E
_
C
L
I
E
N
T
_
I
D
 
a
s
 
s
t
r
i
n
g
 
|
|
 
'
m
i
s
s
i
n
g
_
c
l
i
e
n
t
_
i
d
'




c
o
n
s
t
 
q
u
e
r
y
C
l
i
e
n
t
 
=
 
n
e
w
 
Q
u
e
r
y
C
l
i
e
n
t
(
{


 
 
d
e
f
a
u
l
t
O
p
t
i
o
n
s
:
 
{


 
 
 
 
q
u
e
r
i
e
s
:
 
{


 
 
 
 
 
 
s
t
a
l
e
T
i
m
e
:
 
1
5
 
*
 
6
0
 
*
 
1
0
0
0
,
 
 
 
 
/
/
 
1
5
 
m
i
n
u
t
e
s


 
 
 
 
 
 
g
c
T
i
m
e
:
 
3
0
 
*
 
6
0
 
*
 
1
0
0
0
,
 
 
 
 
 
 
 
/
/
 
3
0
 
m
i
n
u
t
e
s
 
(
f
o
r
m
e
r
l
y
 
c
a
c
h
e
T
i
m
e
)


 
 
 
 
 
 
r
e
f
e
t
c
h
O
n
W
i
n
d
o
w
F
o
c
u
s
:
 
f
a
l
s
e
,


 
 
 
 
 
 
r
e
t
r
y
:
 
1
,


 
 
 
 
}
,


 
 
}
,


}
)




/
/
 
W
i
r
e
 
u
p
 
q
u
e
r
y
 
c
l
i
e
n
t
 
f
o
r
 
c
a
c
h
e
 
i
n
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
 
o
n
 
l
o
g
i
n
/
l
o
g
o
u
t


s
e
t
A
u
t
h
Q
u
e
r
y
C
l
i
e
n
t
(
q
u
e
r
y
C
l
i
e
n
t
)




c
o
n
s
t
 
r
o
o
t
E
l
 
=
 
d
o
c
u
m
e
n
t
.
g
e
t
E
l
e
m
e
n
t
B
y
I
d
(
'
r
o
o
t
'
)
!




c
o
n
s
t
 
t
r
e
e
 
=
 
(


 
 
<
S
t
r
i
c
t
M
o
d
e
>


 
 
 
 
<
H
e
l
m
e
t
P
r
o
v
i
d
e
r
>


 
 
 
 
 
 
<
Q
u
e
r
y
C
l
i
e
n
t
P
r
o
v
i
d
e
r
 
c
l
i
e
n
t
=
{
q
u
e
r
y
C
l
i
e
n
t
}
>


 
 
 
 
 
 
 
 
<
G
o
o
g
l
e
O
A
u
t
h
P
r
o
v
i
d
e
r
 
c
l
i
e
n
t
I
d
=
{
g
o
o
g
l
e
C
l
i
e
n
t
I
d
}
>


 
 
 
 
 
 
 
 
 
 
<
B
r
o
w
s
e
r
R
o
u
t
e
r
>


 
 
 
 
 
 
 
 
 
 
 
 
<
T
h
e
m
e
P
r
o
v
i
d
e
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
p
p
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
T
h
e
m
e
P
r
o
v
i
d
e
r
>


 
 
 
 
 
 
 
 
 
 
<
/
B
r
o
w
s
e
r
R
o
u
t
e
r
>


 
 
 
 
 
 
 
 
<
/
G
o
o
g
l
e
O
A
u
t
h
P
r
o
v
i
d
e
r
>


 
 
 
 
 
 
<
/
Q
u
e
r
y
C
l
i
e
n
t
P
r
o
v
i
d
e
r
>


 
 
 
 
<
/
H
e
l
m
e
t
P
r
o
v
i
d
e
r
>


 
 
<
/
S
t
r
i
c
t
M
o
d
e
>


)




i
f
 
(
r
o
o
t
E
l
.
h
a
s
C
h
i
l
d
N
o
d
e
s
(
)
)
 
{


 
 
h
y
d
r
a
t
e
R
o
o
t
(
r
o
o
t
E
l
,
 
t
r
e
e
)


}
 
e
l
s
e
 
{


 
 
c
r
e
a
t
e
R
o
o
t
(
r
o
o
t
E
l
)
.
r
e
n
d
e
r
(
t
r
e
e
)


}




